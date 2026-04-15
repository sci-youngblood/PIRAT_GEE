// =============================================================================
// PIRAT_ARCHIPELAGO_MAP.js  v9
// Morgan R. Youngblood | UH_Hilo _Marine_Science
// _Pacific Islands Region _Acoustic_Telemetry — Hawaiian Archipelago
// Data: PIRAT_Network / _Ocean_Tracking_Network
//   members.oceantrack.org — public KML exports
// _Proposed_sites: HIMB Hawaii FAD Program
//   himb.hawaii.edu/FADS
// =============================================================================

// ---------------------------------------------------------------------------
// _config
// ---------------------------------------------------------------------------
var ASSET = 'projects/fresh-heuristic-406306/assets/pirat_stations_unique';

// ---------------------------------------------------------------------------
// palette :: _monokai_extended
// ---------------------------------------------------------------------------
var M = {
  bg:     '#272822',
  fg:     '#F8F8F2',
  green:  '#A6E22E',   // PIRAT.PFRL
  pink:   '#FF6AC1',   // PIRAT.HCTP
  yellow: '#E6DB74',   // PIRAT.LHWI
  cyan:   '#66D9E8',   // PIRAT.MNUI
  orange: '#FD971F',   // PIRAT.MOLOKI
  purple: '#AE81FF',   // _proposed_sites
  muted:  '#75715E',
  border: '#3E3D32'
};

// ---------------------------------------------------------------------------
// collection_metadata
// ---------------------------------------------------------------------------
var INFO = {
  'PIRAT.PFRL': {
    color:       M.green,
    contributor: 'Holland, K. & Meyer, C.',
    project:     'Pelagic_Fish_Research_Lab — Hawaii_Array',
    citation:    'Holland, K. & Meyer, C. (2022). Pelagic Fish\nResearch Lab Hawaii Array. PIRAT/OTN.',
    years:       '2002 – 2024',
    count:       172,
    species: [
      'Brilliant pomfret','Green jobfish','Palenose parrotfish',
      'Bluespine unicornfish','Bullethead parrotfish','Whitetip reef shark',
      'Spectacled parrotfish','Indo-Pacific blue marlin','Yellowsaddle goatfish',
      'Bigeye emperor','Hawaiian grouper','Bigeye tuna','Giant trevally',
      'Sandbar shark','Chevron tang','Orangespine unicornfish','Doublebar goatfish',
      'Stareye parrotfish','Kawakawa','Tiger shark','Greater amberjack',
      'Yellowfin tuna','Galapagos shark','Blacktip reef shark',
      'Ringtail surgeonfish','Sleek unicornfish','Grey reef shark',
      'Bicolor parrotfish','Scalloped hammerhead','Bluefin trevally',
      'Yellowfin surgeonfish','Blacktip shark','Bluntnose sixgill shark',
      'White shark'
    ]
  },
  'PIRAT.MNUI': {
    color:       M.cyan,
    contributor: 'Filous, A., Friedlander, A. & Sparks, R.',
    project:     'Pelagic_Fish_Research_Lab — _Maui_Node',
    citation:    'Filous, A., Friedlander, A. & Sparks, R. (2016).\nMaui Node. PIRAT/OTN.',
    years:       '2013 – 2017',
    count:       11,
    species: [
      'Green jobfish','Giant trevally','Whitetip reef shark',
      'Bluefin trevally','Grey reef shark','Sandbar shark',
      'Unidentified chub'
    ]
  },
  'PIRAT.HCTP': {
    color:       M.pink,
    contributor: 'Hutchinson, M. & Scott, M.',
    project:     'Hawaii_Community_Tagging_Project — FADs',
    citation:    'Hutchinson, M. & Scott, M. (2022). Hawaii Community\nTagging Project FADs. PIRAT/OTN.',
    years:       '2017 – 2025',
    count:       27,
    species: [
      'Galapagos shark','Bigeye thresher','Silky shark',
      'Pelagic thresher','Oceanic whitetip shark','Shortfin mako shark',
      'Sandbar shark','Blue shark'
    ]
  },
  'PIRAT.HCTPTX': {
    color:       M.pink,
    contributor: 'Hutchinson, M. & Scott, M.',
    project:     'Hawaii_Community_Tagging_Project — FADs',
    citation:    'Hutchinson, M. & Scott, M. (2022). Hawaii Community\nTagging Project FADs. PIRAT/OTN.',
    years:       '2017 – 2025',
    count:       27,
    species: [
      'Galapagos shark','Bigeye thresher','Silky shark',
      'Pelagic thresher','Oceanic whitetip shark','Shortfin mako shark',
      'Sandbar shark','Blue shark'
    ]
  },
  'PIRAT.LHWI': {
    color:       M.yellow,
    contributor: 'Anderson, J.',
    project:     'Scalloped_Hammerhead — _Critical_Habitat & Connectivity',
    citation:    'Anderson, J. (2020). Critical habitat, movement\necology and population connectivity of scalloped\nhammerhead sharks (Sphyrna lewini). PIRAT/OTN.',
    years:       '2020 – 2025',
    count:       18,
    species: ['Scalloped hammerhead']
  },
  'PIRAT.MOLOKI': {
    color:       M.orange,
    contributor: 'Weng, K.',
    project:     'Molokini_Fish_Tracking_Array',
    citation:    'Weng, K. (2020). Molokini Fish Tracking Array.\nPIRAT/OTN.',
    years:       '2020 – present',
    count:       7,
    species: [
      'Sandbar shark','Whitetip reef shark','Bluefin trevally',
      'Grey reef shark','Giant trevally','Greater amberjack'
    ]
  }
};

// ---------------------------------------------------------------------------
// _proposed_sites :: east Hawaiʻi FAD deployment candidates
// Source: HIMB Hawaii FAD Program — himb.hawaii.edu/FADS
// ---------------------------------------------------------------------------
var PROPOSED = [
  {
    name:      'FAD_HK — Pepeekeo Pt.',
    location:  'East Hawaiʻi, north Hilo',
    landmark:  'Pepeekeo Pt.',
    lat:        19.97667,
    lon:       -154.98333,
    depth:     '890 fathoms',
    rationale: 'Northernmost east-side anchor.\nCaptures offshore movements north of Hilo\nand approaches from the Alenuihāhā Channel.'
  },
  {
    name:      'FAD_E — Leleiwi',
    location:  'East Hawaiʻi, Hilo side',
    landmark:  'Hilo Bay Lt.',
    lat:        19.76833,
    lon:       -154.91333,
    depth:     '920 fathoms',
    rationale: 'Covers north end of east-side corridor.\nBridges the offshore gap near Hilo.'
  },
  {
    name:      'FAD_D — Kumukahi',
    location:  'East Hawaiʻi, far SE',
    landmark:  'Kumukahi Pt. Lt.',
    lat:        19.62500,
    lon:       -154.77833,
    depth:     '950 fathoms',
    rationale: 'Strong anchor for the windward/east-side corridor.\nCaptures animals moving between Hilo, Puna,\nand offshore waters.'
  },
  {
    name:      'FAD_KH — Kehena',
    location:  'East Hawaiʻi, Puna',
    landmark:  'Pohoiki / Hākuma Lt.',
    lat:        19.34833,
    lon:       -154.88000,
    depth:     '940 fathoms',
    rationale: 'Mid-gap option between Hilo/Kumukahi and south FADs.\nCompletes a continuous east-side receiver line.'
  },
  {
    name:      'FAD_RN — Palima Pt.',
    location:  'East Hawaiʻi, Puna / lower windward',
    landmark:  'ʻĀpua Pt. / Nīnole Cove',
    lat:        19.13000,
    lon:       -155.39167,
    depth:     '733 fathoms',
    rationale: 'Fills southern end of east-side gap.\nProximity to South Point movement corridors.'
  },
  {
    name:      'FAD_A — South Point',
    location:  'South tip — Ka Lae',
    landmark:  'South Cape',
    lat:        18.95583,
    lon:       -155.55667,
    depth:     '700 fathoms',
    rationale: 'Best southern sentinel site.\nCaptures movements around Ka Lae and the\nAlenuihāhā / Kaʻū junction.'
  }
];

var proposedFeatures = PROPOSED.map(function(s) {
  return ee.Feature(
    ee.Geometry.Point([s.lon, s.lat]),
    {
      name:      s.name,
      location:  s.location,
      landmark:  s.landmark,
      depth:     s.depth,
      rationale: s.rationale,
      type:      'proposed'
    }
  );
});
var proposedFC = ee.FeatureCollection(proposedFeatures);

var proposedStyled = proposedFC.map(function(f) {
  return f.set('style', {
    color:      M.purple,
    fillColor:  M.purple + '55',
    pointSize:  7,
    pointShape: 'triangle',
    width:      2
  });
});

// ---------------------------------------------------------------------------
// existing stations :: style by collection color
// ---------------------------------------------------------------------------
var stations = ee.FeatureCollection(ASSET);

var styled = stations.map(function(f) {
  var code = f.get('collectioncode');
  var color = ee.Algorithms.If(ee.String(code).equals('PIRAT.PFRL'),   M.green,
              ee.Algorithms.If(ee.String(code).equals('PIRAT.MNUI'),   M.cyan,
              ee.Algorithms.If(ee.String(code).equals('PIRAT.HCTP'),   M.pink,
              ee.Algorithms.If(ee.String(code).equals('PIRAT.HCTPTX'), M.pink,
              ee.Algorithms.If(ee.String(code).equals('PIRAT.MOLOKI'), M.orange,
              M.yellow)))));
  return f.set('style', {
    color:      color,
    fillColor:  ee.String(color).cat('cc'),
    pointSize:  5,
    pointShape: 'circle',
    width:      1.5
  });
});

// ---------------------------------------------------------------------------
// map
// ---------------------------------------------------------------------------
Map.setCenter(-166.5, 24.0, 6);
Map.setOptions('HYBRID');
Map.addLayer(styled.style({ styleProperty: 'style' }),         {}, 'PIRAT_Stations',  true);
Map.addLayer(proposedStyled.style({ styleProperty: 'style' }), {}, '_Proposed_Sites', true);

// ---------------------------------------------------------------------------
// ui_helpers
// ---------------------------------------------------------------------------
var lbl = function(text, color, size, extra) {
  var s = {
    color:           color || M.fg,
    fontSize:        size  || '13px',
    backgroundColor: M.bg,
    margin:          '1px 0'
  };
  if (extra) for (var k in extra) s[k] = extra[k];
  return ui.Label({ value: text, style: s });
};

var mono = function(text, color, size, extra) {
  var s = {
    color:           color || M.fg,
    fontSize:        size  || '13px',
    fontFamily:      'monospace',
    backgroundColor: M.bg,
    margin:          '1px 0'
  };
  if (extra) for (var k in extra) s[k] = extra[k];
  return ui.Label({ value: text, style: s });
};

var rule = function() {
  return ui.Label({ value: '', style: {
    backgroundColor: M.border,
    height: '1px', margin: '8px 0', stretch: 'horizontal'
  }});
};

var commentHdr = function(text) {
  return mono('// ' + text, M.muted, '12px', { margin: '8px 0 4px 0' });
};

var fieldRow = function(key, val, valColor) {
  var row = ui.Panel({
    layout: ui.Panel.Layout.flow('horizontal'),
    style:  { backgroundColor: M.bg, margin: '3px 0' }
  });
  row.add(mono(key, M.muted, '12px', { margin: '0 4px 0 0' }));
  row.add(lbl(val || '—', valColor || M.fg, '12px', { margin: '0' }));
  return row;
};

// ---------------------------------------------------------------------------
// main_panel
// ---------------------------------------------------------------------------
var panel = ui.Panel({
  style: {
    position:        'top-left',
    backgroundColor: M.bg,
    border:          '1px solid ' + M.border,
    padding:         '0px',
    width:           '288px'
  }
});

var hdrBlock = ui.Panel({ style: { backgroundColor: M.bg, padding: '14px 16px 12px 16px' } });
hdrBlock.add(mono('PIRAT_ARCHIPELAGO', M.green, '16px',
  { fontWeight: 'bold', margin: '0 0 3px 0', backgroundColor: M.bg }));
hdrBlock.add(mono('// _Pacific Islands Region _Acoustic_Telemetry', M.muted, '11px',
  { margin: '0', backgroundColor: M.bg }));
panel.add(hdrBlock);
panel.add(rule());

var netBlock = ui.Panel({ style: { backgroundColor: M.bg, padding: '0 16px 10px 16px' } });
netBlock.add(commentHdr('_network'));

var netRow = function(color, code, desc, n) {
  var row = ui.Panel({
    layout: ui.Panel.Layout.flow('horizontal'),
    style:  { backgroundColor: M.bg, margin: '4px 0' }
  });
  row.add(lbl('● ', color, '15px', { margin: '0 4px 0 0', backgroundColor: M.bg }));
  row.add(mono(code + '  ', color, '12px',
    { fontWeight: 'bold', margin: '0 4px 0 0', backgroundColor: M.bg }));
  row.add(lbl(desc + '  ', M.fg, '12px', { margin: '0 2px 0 0', backgroundColor: M.bg }));
  row.add(lbl('(' + n + ')', M.muted, '11px', { margin: '0', backgroundColor: M.bg }));
  return row;
};

netBlock.add(netRow(M.green,  'PFRL',   'Pelagic_Fish_Research_Lab', 172));
netBlock.add(netRow(M.pink,   'HCTP',   'Community_Tagging — FADs',  27));
netBlock.add(netRow(M.yellow, 'LHWI',   'Hammerhead_Connectivity',   18));
netBlock.add(netRow(M.cyan,   'MNUI',   '_Maui_Node',                11));
netBlock.add(netRow(M.orange, 'MOLOKI', 'Molokini_Array',             7));

var propNetRow = ui.Panel({
  layout: ui.Panel.Layout.flow('horizontal'),
  style:  { backgroundColor: M.bg, margin: '4px 0' }
});
propNetRow.add(lbl('▲ ', M.purple, '13px', { margin: '0 4px 0 0', backgroundColor: M.bg }));
propNetRow.add(mono('PROPOSED  ', M.purple, '12px',
  { fontWeight: 'bold', margin: '0 4px 0 0', backgroundColor: M.bg }));
propNetRow.add(lbl('East_Hawaiʻi_Sites  ', M.fg, '12px',
  { margin: '0 2px 0 0', backgroundColor: M.bg }));
propNetRow.add(lbl('(6)', M.muted, '11px', { margin: '0', backgroundColor: M.bg }));
netBlock.add(propNetRow);

netBlock.add(rule());
netBlock.add(mono('// total: 235 stations', M.muted, '11px',
  { margin: '4px 0 0 0', backgroundColor: M.bg }));
panel.add(netBlock);
panel.add(rule());

var usageBlock = ui.Panel({ style: { backgroundColor: M.bg, padding: '0 16px 10px 16px' } });
usageBlock.add(commentHdr('usage'));
usageBlock.add(lbl(
  'Click any station or ▲ site to inspect\nmetadata, contributor, and _species_detected.',
  M.fg, '12px', { margin: '2px 0 0 0', whiteSpace: 'pre', backgroundColor: M.bg }
));
panel.add(usageBlock);
panel.add(rule());

var attrBlock = ui.Panel({ style: { backgroundColor: M.bg, padding: '0 16px 10px 16px' } });
attrBlock.add(commentHdr('_data_sources'));
attrBlock.add(mono('PIRAT_Network / _Ocean_Tracking_Network', M.muted, '10px',
  { margin: '2px 0 0 0', backgroundColor: M.bg }));
attrBlock.add(mono('members.oceantrack.org', M.muted, '10px',
  { margin: '1px 0', backgroundColor: M.bg }));
attrBlock.add(mono('_Proposed sites: HIMB Hawaii FAD Program', M.muted, '10px',
  { margin: '1px 0', backgroundColor: M.bg }));
attrBlock.add(mono('Compiled_by: M.R. Youngblood', M.muted, '10px',
  { margin: '1px 0 0 0', backgroundColor: M.bg }));
panel.add(attrBlock);
Map.add(panel);

// ---------------------------------------------------------------------------
// legend :: bottom-left
// ---------------------------------------------------------------------------
var legend = ui.Panel({
  style: {
    position:        'bottom-left',
    backgroundColor: M.bg,
    border:          '1px solid ' + M.border,
    padding:         '10px 14px',
    width:           '255px'
  }
});

legend.add(mono('// _contributor', M.muted, '12px',
  { fontWeight: 'bold', margin: '0 0 6px 0', backgroundColor: M.bg }));

// Single-label approach: contributor + years in one string — guaranteed inline
var legendRow = function(symbol, symSize, color, code, contrib, years) {
  var row = ui.Panel({
    layout: ui.Panel.Layout.flow('horizontal'),
    style:  { backgroundColor: M.bg, margin: '5px 0' }
  });
  row.add(lbl(symbol + ' ', color, symSize,
    { margin: '0 6px 0 0', backgroundColor: M.bg }));
  var col = ui.Panel({ style: { backgroundColor: M.bg } });
  col.add(mono(code, color, '11px',
    { fontWeight: 'bold', margin: '0', backgroundColor: M.bg }));
  // contrib + years as single label — no panel splitting
  col.add(lbl(contrib + '  (' + years + ')', M.fg, '11px',
    { margin: '1px 0 0 0', backgroundColor: M.bg }));
  row.add(col);
  return row;
};

legend.add(legendRow('●', '14px', M.green,  'PIRAT.PFRL',   'Holland & Meyer',              '2002 – 2024'));
legend.add(legendRow('●', '14px', M.pink,   'PIRAT.HCTP',   'Hutchinson & Scott',           '2017 – 2025'));
legend.add(legendRow('●', '14px', M.yellow, 'PIRAT.LHWI',   'Anderson',                     '2020 – 2025'));
legend.add(legendRow('●', '14px', M.cyan,   'PIRAT.MNUI',   'Filous, Friedlander & Sparks', '2013 – 2017'));
legend.add(legendRow('●', '14px', M.orange, 'PIRAT.MOLOKI', 'Weng',                         '2020 – present'));

legend.add(rule());
legend.add(mono('// _proposed_deployment', M.muted, '11px',
  { fontWeight: 'bold', margin: '4px 0 4px 0', backgroundColor: M.bg }));
legend.add(legendRow('▲', '12px', M.purple, 'HIMB FAD Sites', 'East Hawaiʻi corridor', '2025'));

Map.add(legend);

// ---------------------------------------------------------------------------
// click_inspector :: bottom-right
// ---------------------------------------------------------------------------
var inspector = ui.Panel({
  style: {
    position:        'bottom-right',
    backgroundColor: M.bg,
    border:          '1px solid ' + M.border,
    padding:         '12px 14px',
    width:           '280px',
    shown:           false
  }
});
Map.add(inspector);

// ---------------------------------------------------------------------------
// station inspector
// ---------------------------------------------------------------------------
var showStation = function(p, geom) {
  var code = p.collectioncode || '';
  var info = INFO[code] || {};
  var col  = info.color || M.purple;

  inspector.clear();

  var hdr = ui.Panel({
    layout: ui.Panel.Layout.flow('horizontal'),
    style:  { backgroundColor: M.bg, margin: '0 0 4px 0' }
  });
  hdr.add(mono(p.station_name || 'UNKNOWN', col, '14px',
    { fontWeight: 'bold', stretch: 'horizontal', backgroundColor: M.bg, margin: '0' }));
  hdr.add(ui.Button({
    label: '✕',
    style: { color: M.muted, backgroundColor: M.bg, border: '0px', fontSize: '13px', margin: '0', padding: '0' },
    onClick: function() { inspector.style().set('shown', false); }
  }));
  inspector.add(hdr);

  inspector.add(mono('// ' + (info.project || code), M.muted, '11px',
    { margin: '0 0 6px 0', backgroundColor: M.bg }));

  inspector.add(rule());

  var depthVal = (p.depth && p.depth !== 'unknown' && p.depth !== '')
    ? Number(p.depth).toFixed(1) + ' m' : null;
  if (depthVal) inspector.add(fieldRow('depth:   ', depthVal));

  if (geom && geom.length >= 2) {
    inspector.add(fieldRow('lat/lon: ',
      Number(geom[1]).toFixed(5) + ',  ' + Number(geom[0]).toFixed(5)));
  }

  if (p.station_type && p.station_type !== '' && p.station_type !== 'Acoustic') {
    inspector.add(fieldRow('type:    ', p.station_type));
  }

  var f = (p.first_year && p.first_year !== '') ? p.first_year.substring(0,10) : null;
  var l = (p.last_year  && p.last_year  !== '') ? p.last_year.substring(0,10)  : null;
  if (f) inspector.add(fieldRow('active:  ', f + '  →  ' + (l || 'present')));

  inspector.add(rule());

  inspector.add(mono('// _contributor', M.muted, '12px',
    { margin: '0 0 2px 0', backgroundColor: M.bg }));
  inspector.add(lbl(
    (info.contributor || 'See PIRAT_Network') + (info.years ? '  ·  ' + info.years : ''),
    col, '12px', { margin: '0 0 2px 0', backgroundColor: M.bg }
  ));
  if (info.citation) {
    inspector.add(lbl(info.citation, M.muted, '10px',
      { margin: '0 0 6px 0', whiteSpace: 'pre', backgroundColor: M.bg }));
  }

  if (info.species && info.species.length > 0) {
    inspector.add(mono('// _species_detected [' + info.species.length + ']', col, '12px',
      { margin: '0 0 2px 0', backgroundColor: M.bg }));
    var spBlock = ui.Panel({
      style: {
        backgroundColor: M.bg,
        border:    '1px solid ' + M.border,
        padding:   '6px 8px',
        maxHeight: '140px',
        margin:    '0'
      }
    });
    for (var i = 0; i < info.species.length; i++) {
      spBlock.add(lbl('· ' + info.species[i], M.fg, '11px',
        { margin: '1px 0', backgroundColor: M.bg }));
    }
    inspector.add(spBlock);
  }

  inspector.style().set('shown', true);
};

// ---------------------------------------------------------------------------
// proposed site inspector
// ---------------------------------------------------------------------------
var showProposed = function(p, geom) {
  inspector.clear();

  var hdr = ui.Panel({
    layout: ui.Panel.Layout.flow('horizontal'),
    style:  { backgroundColor: M.bg, margin: '0 0 4px 0' }
  });
  hdr.add(mono(p.name || '_PROPOSED_SITE', M.purple, '14px',
    { fontWeight: 'bold', stretch: 'horizontal', backgroundColor: M.bg, margin: '0' }));
  hdr.add(ui.Button({
    label: '✕',
    style: { color: M.muted, backgroundColor: M.bg, border: '0px', fontSize: '13px', margin: '0', padding: '0' },
    onClick: function() { inspector.style().set('shown', false); }
  }));
  inspector.add(hdr);

  inspector.add(mono('// _proposed_deployment_site', M.muted, '11px',
    { margin: '0 0 6px 0', backgroundColor: M.bg }));

  inspector.add(rule());

  // location in purple
  if (p.location) inspector.add(fieldRow('location: ', p.location, M.purple));
  if (p.landmark) inspector.add(fieldRow('landmark: ', p.landmark));
  if (p.depth)    inspector.add(fieldRow('depth:    ', p.depth));

  if (geom && geom.length >= 2) {
    inspector.add(fieldRow('lat/lon:  ',
      Number(geom[1]).toFixed(5) + ',  ' + Number(geom[0]).toFixed(5)));
  }

  inspector.add(rule());

  inspector.add(mono('// _rationale', M.muted, '12px',
    { margin: '0 0 2px 0', backgroundColor: M.bg }));
  inspector.add(lbl(p.rationale || '—', M.fg, '12px',
    { margin: '0 0 6px 0', whiteSpace: 'pre', backgroundColor: M.bg }));

  inspector.add(rule());

  // HIMB attribution in orange
  inspector.add(mono('// _source', M.muted, '11px',
    { margin: '0 0 2px 0', backgroundColor: M.bg }));
  inspector.add(lbl('HIMB Hawaii FAD Program', M.orange, '11px',
    { margin: '0', backgroundColor: M.bg }));
  inspector.add(lbl('himb.hawaii.edu/FADS', M.orange, '10px',
    { margin: '0', backgroundColor: M.bg }));

  inspector.style().set('shown', true);
};

// ---------------------------------------------------------------------------
// click handler
// ---------------------------------------------------------------------------
Map.onClick(function(coords) {
  var pt = ee.Geometry.Point([coords.lon, coords.lat]);

  var nearProposed = proposedFC.filterBounds(pt.buffer(15000)).limit(1);
  nearProposed.size().evaluate(function(propSize) {
    if (propSize > 0) {
      nearProposed.first().evaluate(function(feat) {
        showProposed(feat.properties, feat.geometry.coordinates);
      });
      return;
    }
    var nearStation = stations.filterBounds(pt.buffer(8000)).limit(1);
    nearStation.size().evaluate(function(statSize) {
      if (statSize === 0) { inspector.style().set('shown', false); return; }
      nearStation.first().evaluate(function(feat) {
        showStation(feat.properties, feat.geometry.coordinates);
      });
    });
  });
});

// =============================================================================
// end :: PIRAT_ARCHIPELAGO_MAP.js
// =============================================================================