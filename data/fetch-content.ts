import Airtable from 'airtable';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

Airtable.configure({
    apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base(process.env.AIRTABLE_BASE!);
const savedRecords: {
    id: string;
    name: string;
    type: string;
    address: string;
    recommendedBy?: string;
    coordinates?: {
        lat: number;
        long: number;
    }
}[] = [];

base('Places').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
        savedRecords.push({
            id: record.get('ID') as string,
            name: record.get('Name') as string,
            type: record.get('Type') as string,
            address: record.get('Address') as string,
            recommendedBy: record.get('Recommended by') as string,
            coordinates: record.get('Coordinates') ? {
                lat: Number((record.get('Coordinates') as string).split(', ')[0]),
                long: Number((record.get('Coordinates') as string).split(', ')[1])
            } : undefined,
        })
    });
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }

    fs.writeFileSync(
        'data/places.json',
        JSON.stringify([...savedRecords], null, 2)
    );

    console.log('Fetched content for ' + savedRecords.length + ' places')
});
