# PIRAT_GEE

Google Earth Engine project mapping the PIRAT (Pacific Islands Reef Assessment and Tracking) acoustic telemetry receiver network across the Hawaiian Archipelago.

**Live app:** https://atlantean-house-406306.projects.earthengine.app/view/piratarchipelago

---

## Project Structure

```
PIRAT_GEE/
├── data/
│   ├── pirat_stations_unique.csv   # 235 unique receiver stations (compiled from KML exports)
│   └── stations_series (1–5).kml  # Raw KML exports from OTN member portal
├── scripts/
│   └── 09_pirat_archipelago_map.js # Final GEE app script (v9)
├── docs/
│   └── GEE_ASSET_UPLOAD.md        # Asset ingestion instructions
└── outputs/                        # Figures, processed results
```

---

## Live App

The interactive map is published as a public GEE app:

**https://atlantean-house-406306.projects.earthengine.app/view/piratarchipelago**

Features:
- All 235 PIRAT receiver stations color-coded by sub-network
- 6 proposed east Hawaiʻi FAD deployment sites (HIMB FAD Program)
- Click any station or proposed site to inspect metadata, contributor, and species detected
- Monokai-themed dark UI with contributor legend and inline inspector panel

GEE asset: `projects/fresh-heuristic-406306/assets/pirat_stations_unique`

---

## Data Sources

| Source | Description |
|---|---|
| PIRAT Network / Ocean Tracking Network | Receiver station locations and deployment metadata exported as KML from [members.oceantrack.org](https://members.oceantrack.org) |
| HIMB Hawaii FAD Program | Proposed east Hawaiʻi FAD deployment coordinates ([himb.hawaii.edu/FADS](https://himb.hawaii.edu/FADS)) |

Station data compiled from five `stations_series` KML exports downloaded from the OTN member portal. Deduplicated by `station_name` and `collectioncode` into `pirat_stations_unique.csv`.

---

## Station Data

`data/pirat_stations_unique.csv` — deduplicated station locations. Fields:

| Field | Description |
|---|---|
| station_name | Unique station identifier |
| collectioncode | Sub-network code (e.g. PIRAT.PFRL) |
| seriescode | Top-level series (PIRAT) |
| ocean | Region (MID PACIFIC) |
| station_type | Acoustic or Transceiver |
| latitude / longitude | WGS84 decimal degrees |
| depth | Deployment depth (m) |
| stationstatus | active / inactive |
| stationclass | deployed |
| first_year | Earliest deployment date |
| last_year | Most recent recovery date |
| locality | Named locality (if recorded) |
| rcvr_serial | Receiver serial number |
| map_code | Map code (if assigned) |

### Collection summary

| Collection | Contributor | Years | Stations |
|---|---|---|---|
| PIRAT.PFRL | Holland, K. & Meyer, C. — Pelagic Fish Research Lab | 2002 – 2024 | 172 |
| PIRAT.HCTP | Hutchinson, M. & Scott, M. — Hawaii Community Tagging Project | 2017 – 2025 | 27 |
| PIRAT.LHWI | Anderson, J. — Scalloped Hammerhead Connectivity | 2020 – 2025 | 18 |
| PIRAT.MNUI | Filous, A., Friedlander, A. & Sparks, R. — Maui Node | 2013 – 2017 | 11 |
| PIRAT.MOLOKI | Weng, K. — Molokini Fish Tracking Array | 2020 – present | 7 |
| **Total** | | | **235** |
