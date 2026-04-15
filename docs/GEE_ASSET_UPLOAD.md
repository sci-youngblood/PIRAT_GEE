# GEE Asset Upload Instructions

## Before running `01_pirat_receiver_gap_map.js`

The script requires `pirat_stations_unique.csv` to be uploaded as a GEE asset.

### Steps

1. Go to [code.earthengine.google.com](https://code.earthengine.google.com)
2. In the left panel, click **Assets** tab
3. Click **New** → **CSV file (.csv)**
4. Upload `data/pirat_stations_unique.csv`
5. Name the asset: `pirat_stations_unique`
6. Wait for ingestion (usually < 2 min for 217 rows)
7. Copy the full asset path — it will look like:
   ```
   projects/YOUR_PROJECT_ID/assets/pirat_stations_unique
   ```
8. Open `scripts/01_pirat_receiver_gap_map.js`
9. Replace line 22:
   ```javascript
   var ASSET_PATH = 'projects/YOUR_PROJECT_ID/assets/pirat_stations_unique';
   ```
   with your actual asset path.

### Verify ingestion

In the GEE Code Editor, run:
```javascript
var stations = ee.FeatureCollection('YOUR_ASSET_PATH');
print('Station count:', stations.size());
print('First feature:', stations.first());
```

Expected output:
```
Station count: 217
First feature: { station_name: ..., latitude: ..., longitude: ... }
```

### Required fields in asset

The script uses these columns from the CSV:

| Column | Used for |
|---|---|
| `latitude` / `longitude` | Spatial filtering and display |
| `collectioncode` | Color coding by network |
| `station_name` | Click inspector label |
| `depth` | Click inspector info |
| `stationstatus` | Click inspector info |

All fields are present in `pirat_stations_unique.csv`.
