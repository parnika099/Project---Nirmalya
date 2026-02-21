// ─── DATA: Auto-generated from Kumbh Mela KMZ via GeoPandas optimization ───

// All location categories from KMZ
const temples = [
  { name: "Shree Ekmukhi Datta Mandir", lat: 20.007583, lng: 73.790385, category: "temple" },
  { name: "Prachin Shri Goreram Mandir", lat: 20.006318, lng: 73.792034, category: "temple" },
  { name: "Sandvyavarchi Devi", lat: 20.005949, lng: 73.793305, category: "temple" },
  { name: "Sita Gufa", lat: 20.007491, lng: 73.796114, category: "temple" },
  { name: "Shree Karthik Swami Mandir", lat: 20.00739, lng: 73.794646, category: "temple" },
  { name: "Shree Kapaleshwar Mahadev Mandir", lat: 20.008323, lng: 73.793125, category: "temple" },
  { name: "Ramkund", lat: 20.008497, lng: 73.791449, category: "temple" },
  { name: "Goda Ghat", lat: 20.007803, lng: 73.792615, category: "temple" },
  { name: "Shri Siddhivinayak Chandicha Ganpati", lat: 20.006543, lng: 73.789625, category: "temple" },
  { name: "Shri Vitthal Mandir", lat: 20.00663, lng: 73.795347, category: "temple" },
  { name: "Shree Lakshami Narayan Mandir", lat: 20.006463, lng: 73.796047, category: "temple" },
  { name: "Shree Laxmanji Sheshavatar Mandir", lat: 20.000889, lng: 73.814203, category: "temple" },
  { name: "Sarva Dharma Mandir", lat: 20.000651, lng: 73.814672, category: "temple" },
  { name: "Kapila Godavari Sangam", lat: 19.999816, lng: 73.81547, category: "temple" },
  { name: "Shri Laxmi Narayan Mandir", lat: 20.001475, lng: 73.811154, category: "temple" },
  { name: "Sant Shri Eknath Maharaj Mandir", lat: 19.999653, lng: 73.816419, category: "temple" },
  { name: "Shri Ram Ji Statue Tapovan", lat: 20.00051, lng: 73.813678, category: "temple" },
  { name: "Maruti Mandir", lat: 20.000229, lng: 73.815791, category: "temple" },
  { name: "BAPS Shri Swaminarayan Mandir", lat: 20.003376, lng: 73.805329, category: "temple" },
  { name: "Jalaram Temple", lat: 20.003606, lng: 73.804858, category: "temple" },
  { name: "Kevdiban Mhasobamaharaj Temple", lat: 20.002634, lng: 73.805788, category: "temple" },
  { name: "Sadguru Shri Pithale Maharaj Samadhi", lat: 20.002672, lng: 73.806386, category: "temple" },
  { name: "Panchvati Surpankha Temple", lat: 20.001144, lng: 73.812879, category: "temple" },
  { name: "Shri Dakshineshwar Hanuman Devasthan", lat: 20.001946, lng: 73.819265, category: "temple" },
  { name: "Sri Sharvayeshwar Mahadev Mandir", lat: 20.007999, lng: 73.816168, category: "temple" },
  { name: "Janardan Swami Math", lat: 20.008085, lng: 73.816163, category: "temple" },
];

const transportHubs = [
  { name: "Nashik Road", lat: 19.97289, lng: 73.822952, category: "transport" },
  { name: "MSRTC Bus Stand", lat: 19.948277, lng: 73.841574, category: "transport" },
  { name: "Railway Station", lat: 19.904044, lng: 73.84978, category: "transport" },
  { name: "CBS", lat: 20.001142, lng: 73.78327, category: "transport" },
  { name: "Malegaon Stand", lat: 20.018107, lng: 73.783659, category: "transport" },
  { name: "Nandur Naka", lat: 19.993202, lng: 73.843377, category: "transport" },
];

const roadsAndJunctions = [
  { name: "Mahatma Gandhi Road", lat: 20.004331, lng: 73.786364, category: "road" },
  { name: "Old Agra Road", lat: 19.99048, lng: 73.789983, category: "road" },
  { name: "Gangapur Road", lat: 20.013075, lng: 73.743027, category: "road" },
  { name: "Sharanpur Road", lat: 20.001261, lng: 73.776205, category: "road" },
  { name: "College Road", lat: 20.005208, lng: 73.767243, category: "road" },
  { name: "Bytco Point", lat: 19.970947, lng: 73.829408, category: "road" },
  { name: "Ashok Stambh", lat: 20.005451, lng: 73.784925, category: "road" },
  { name: "Panchavati Karanja", lat: 20.010026, lng: 73.795219, category: "road" },
  { name: "Raviwar Karanja", lat: 20.007429, lng: 73.786763, category: "road" },
  { name: "Dwarka Circle", lat: 19.9943, lng: 73.797215, category: "road" },
  { name: "Kathe Lane", lat: 19.990251, lng: 73.800899, category: "road" },
  { name: "Adgaon Naka", lat: 20.010144, lng: 73.808087, category: "road" },
  { name: "Nimani Bus Stand", lat: 20.011677, lng: 73.796821, category: "road" },
  { name: "Tapovan", lat: 19.987298, lng: 73.811028, category: "road" },
  { name: "Nag Chowk", lat: 20.007857, lng: 73.798309, category: "road" },
  { name: "Sardar Chowk", lat: 20.006162, lng: 73.793512, category: "road" },
  { name: "Dahipul", lat: 20.003289, lng: 73.788009, category: "road" },
  { name: "Shalimar", lat: 20.002441, lng: 73.787498, category: "road" },
  { name: "Anandvalli", lat: 20.014145, lng: 73.739096, category: "road" },
  { name: "Canada Corner", lat: 20.007375, lng: 73.767365, category: "road" },
  { name: "Jail Road", lat: 19.974902, lng: 73.841241, category: "road" },
  { name: "Upnagar", lat: 19.973875, lng: 73.822077, category: "road" },
  { name: "Gandhi Nagar", lat: 19.975994, lng: 73.830772, category: "road" },
  { name: "Bodhale Nagar", lat: 19.980716, lng: 73.806161, category: "road" },
  { name: "Ganjmal", lat: 19.995991, lng: 73.786849, category: "road" },
  { name: "Vadala Naka", lat: 19.994014, lng: 73.793994, category: "road" },
  { name: "Takli Road", lat: 19.993951, lng: 73.809434, category: "road" },
];

// Road-following route extracted from KML Directions (simplified)
// 456 waypoints, 18.60 km — follows actual roads, not straight lines
const roverPathCoords = [
  [20.00648, 73.78956],
  [20.00666, 73.78951],
  [20.00685, 73.78962],
  [20.0071, 73.78973],
  [20.00727, 73.78979],
  [20.00744, 73.78987],
  [20.00762, 73.78995],
  [20.00778, 73.78999],
  [20.00791, 73.79004],
  [20.00804, 73.79014],
  [20.00818, 73.79026],
  [20.00829, 73.79035],
  [20.00848, 73.79054],
  [20.00901, 73.79104],
  [20.00923, 73.79125],
  [20.00937, 73.7914],
  [20.0095, 73.79159],
  [20.00956, 73.79176],
  [20.00946, 73.79192],
  [20.00918, 73.79206],
  [20.00898, 73.79217],
  [20.00882, 73.79227],
  [20.00864, 73.7924],
  [20.00851, 73.7925],
  [20.00821, 73.79273],
  [20.00791, 73.79291],
  [20.00786, 73.79325],
  [20.00807, 73.79326],
  [20.00821, 73.79328],
  [20.00864, 73.79343],
  [20.00862, 73.79369],
  [20.00861, 73.79396],
  [20.00861, 73.79411],
  [20.00861, 73.79432],
  [20.00863, 73.79448],
  [20.00842, 73.79442],
  [20.00821, 73.79434],
  [20.00804, 73.79428],
  [20.00765, 73.79412],
  [20.00742, 73.79395],
  [20.00718, 73.79388],
  [20.00694, 73.79383],
  [20.00671, 73.79379],
  [20.00657, 73.79377],
  [20.00642, 73.79376],
  [20.00627, 73.79375],
  [20.00626, 73.79411],
  [20.00629, 73.79434],
  [20.0063, 73.79452],
  [20.00637, 73.79471],
  [20.00643, 73.79485],
  [20.00646, 73.79501],
  [20.00655, 73.79513],
  [20.00662, 73.79527],
  [20.00662, 73.79559],
  [20.00659, 73.79582],
  [20.00662, 73.79604],
  [20.00669, 73.7962],
  [20.00674, 73.79637],
  [20.00676, 73.79666],
  [20.00694, 73.79668],
  [20.00709, 73.79679],
  [20.00718, 73.79692],
  [20.00702, 73.79731],
  [20.00722, 73.79751],
  [20.0074, 73.79771],
  [20.00755, 73.79788],
  [20.00769, 73.79806],
  [20.00778, 73.79818],
  [20.00803, 73.79827],
  [20.00827, 73.79828],
  [20.00841, 73.79828],
  [20.00861, 73.79827],
  [20.00875, 73.79826],
  [20.00876, 73.79811],
  [20.00896, 73.79812],
  [20.00928, 73.79812],
  [20.00946, 73.79814],
  [20.00962, 73.79817],
  [20.00986, 73.79823],
  [20.01008, 73.79828],
  [20.01038, 73.79776],
  [20.01054, 73.7975],
  [20.01102, 73.7967],
  [20.01127, 73.79622],
  [20.01131, 73.79608],
  [20.01131, 73.79592],
  [20.0112, 73.79565],
  [20.01126, 73.79551],
  [20.01139, 73.79547],
  [20.01154, 73.79549],
  [20.01175, 73.79554],
  [20.01202, 73.79483],
  [20.01159, 73.79428],
  [20.01144, 73.79414],
  [20.0112, 73.79385],
  [20.01089, 73.79364],
  [20.01062, 73.79347],
  [20.01049, 73.79343],
  [20.01028, 73.79341],
  [20.00997, 73.79341],
  [20.00988, 73.79313],
  [20.00977, 73.79264],
  [20.0097, 73.79241],
  [20.00964, 73.79223],
  [20.00952, 73.79189],
  [20.00934, 73.79198],
  [20.00918, 73.79206],
  [20.00898, 73.79217],
  [20.00882, 73.79227],
  [20.00864, 73.7924],
  [20.00848, 73.79217],
  [20.0085, 73.79181],
  [20.00729, 73.79526],
  [20.00639, 73.79208],
  [20.00667, 73.79202],
  [20.00685, 73.79198],
  [20.00722, 73.7919],
  [20.00722, 73.79209],
  [20.00721, 73.79225],
  [20.00721, 73.7925],
  [20.00706, 73.79266],
  [20.00689, 73.7927],
  [20.00672, 73.79273],
  [20.00652, 73.79277],
  [20.00647, 73.79297],
  [20.00654, 73.79316],
  [20.00636, 73.79325],
  [20.00612, 73.79358],
  [20.00619, 73.79371],
  [20.00623, 73.79387],
  [20.00626, 73.79411],
  [20.00629, 73.79434],
  [20.0063, 73.79452],
  [20.00637, 73.79471],
  [20.00643, 73.79485],
  [20.00646, 73.79501],
  [20.00655, 73.79513],
  [20.00662, 73.79527],
  [20.00663, 73.79551],
  [20.00659, 73.79582],
  [20.00662, 73.79604],
  [20.00669, 73.7962],
  [20.00674, 73.79637],
  [20.00676, 73.79666],
  [20.00679, 73.79684],
  [20.00683, 73.79703],
  [20.00692, 73.79718],
  [20.00702, 73.79731],
  [20.00722, 73.79751],
  [20.0074, 73.79771],
  [20.00755, 73.79788],
  [20.00769, 73.79806],
  [20.00778, 73.79818],
  [20.00791, 73.79857],
  [20.00797, 73.799],
  [20.00804, 73.79929],
  [20.00814, 73.79964],
  [20.00818, 73.79982],
  [20.00822, 73.80001],
  [20.00828, 73.8003],
  [20.00833, 73.80049],
  [20.00839, 73.80081],
  [20.00843, 73.80098],
  [20.00845, 73.80153],
  [20.00865, 73.80181],
  [20.00875, 73.80194],
  [20.00873, 73.80209],
  [20.00887, 73.80251],
  [20.00896, 73.80281],
  [20.0091, 73.80324],
  [20.00918, 73.8036],
  [20.00921, 73.80376],
  [20.00925, 73.80419],
  [20.0093, 73.80476],
  [20.00932, 73.80495],
  [20.00938, 73.80563],
  [20.0094, 73.80598],
  [20.00936, 73.80616],
  [20.00915, 73.8064],
  [20.00904, 73.80624],
  [20.00886, 73.80601],
  [20.0087, 73.80582],
  [20.00853, 73.80562],
  [20.0084, 73.80548],
  [20.00827, 73.80535],
  [20.00813, 73.80521],
  [20.0079, 73.805],
  [20.00772, 73.80484],
  [20.00755, 73.80471],
  [20.00743, 73.80461],
  [20.00719, 73.80444],
  [20.00682, 73.8042],
  [20.00668, 73.80438],
  [20.00632, 73.80418],
  [20.00613, 73.80408],
  [20.00599, 73.80399],
  [20.00585, 73.80392],
  [20.00567, 73.80385],
  [20.0047, 73.80345],
  [20.00453, 73.80339],
  [20.00418, 73.80334],
  [20.00385, 73.80333],
  [20.00318, 73.80336],
  [20.00303, 73.80337],
  [20.00227, 73.80343],
  [20.00227, 73.8037],
  [20.00228, 73.80422],
  [20.00228, 73.80437],
  [20.00229, 73.80512],
  [20.00228, 73.80545],
  [20.00228, 73.80597],
  [20.00228, 73.80637],
  [20.00228, 73.80665],
  [20.00228, 73.8068],
  [20.00229, 73.80696],
  [20.00224, 73.80712],
  [20.00212, 73.8075],
  [20.00199, 73.80786],
  [20.00179, 73.80836],
  [20.00171, 73.80858],
  [20.00165, 73.80874],
  [20.00162, 73.8089],
  [20.00164, 73.80907],
  [20.00171, 73.8093],
  [20.00179, 73.80948],
  [20.00185, 73.80963],
  [20.00194, 73.80985],
  [20.00231, 73.81068],
  [20.00206, 73.81145],
  [20.00197, 73.81168],
  [20.00178, 73.81177],
  [20.00165, 73.81185],
  [20.00159, 73.81202],
  [20.00158, 73.8122],
  [20.00158, 73.81241],
  [20.00158, 73.81257],
  [20.0015, 73.8127],
  [20.00133, 73.81273],
  [20.0011, 73.81275],
  [20.00099, 73.81295],
  [20.00098, 73.81311],
  [20.00098, 73.81326],
  [20.00098, 73.81347],
  [20.00096, 73.81362],
  [20.0009, 73.81377],
  [20.00082, 73.81389],
  [20.00069, 73.8142],
  [20.00061, 73.81436],
  [20.00054, 73.81454],
  [20.00056, 73.81477],
  [20.00061, 73.81498],
  [20.00071, 73.81524],
  [20.00076, 73.81553],
  [20.00087, 73.81574],
  [20.00098, 73.8159],
  [20.0011, 73.81602],
  [20.00131, 73.81616],
  [20.00142, 73.81625],
  [20.00155, 73.81638],
  [20.00164, 73.81649],
  [20.00173, 73.81662],
  [20.00181, 73.81682],
  [20.00185, 73.81699],
  [20.00184, 73.81731],
  [20.00185, 73.81748],
  [20.00185, 73.81774],
  [20.00185, 73.8183],
  [20.00185, 73.81885],
  [20.00185, 73.81903],
  [20.00186, 73.81918],
  [20.00729, 73.79526],
  [20.00726, 73.79582],
  [20.00726, 73.79603],
  [20.00709, 73.79603],
  [20.00696, 73.79609],
  [20.00674, 73.79637],
  [20.00674, 73.79637],
  [20.00676, 73.79666],
  [20.00679, 73.79684],
  [20.00683, 73.79703],
  [20.00692, 73.79718],
  [20.00702, 73.79731],
  [20.00722, 73.79751],
  [20.0074, 73.79771],
  [20.00755, 73.79788],
  [20.00769, 73.79806],
  [20.00778, 73.79818],
  [20.00791, 73.79857],
  [20.00797, 73.799],
  [20.00804, 73.79929],
  [20.00814, 73.79964],
  [20.00818, 73.79982],
  [20.00822, 73.80001],
  [20.00828, 73.8003],
  [20.00833, 73.80049],
  [20.00839, 73.80081],
  [20.00843, 73.80098],
  [20.00845, 73.80153],
  [20.00865, 73.80181],
  [20.00875, 73.80194],
  [20.00873, 73.80209],
  [20.00887, 73.80251],
  [20.00896, 73.80281],
  [20.0091, 73.80324],
  [20.00918, 73.8036],
  [20.00921, 73.80376],
  [20.00925, 73.80419],
  [20.0093, 73.80476],
  [20.00932, 73.80495],
  [20.00938, 73.80563],
  [20.0094, 73.80598],
  [20.00936, 73.80616],
  [20.00939, 73.80635],
  [20.0096, 73.80672],
  [20.00986, 73.80721],
  [20.00993, 73.80735],
  [20.01002, 73.80754],
  [20.01022, 73.80804],
  [20.01042, 73.80858],
  [20.01056, 73.80902],
  [20.01071, 73.80948],
  [20.01082, 73.80981],
  [20.01089, 73.81],
  [20.01073, 73.81043],
  [20.01046, 73.81093],
  [20.01036, 73.81116],
  [20.01, 73.81186],
  [20.00956, 73.81264],
  [20.0094, 73.81297],
  [20.00905, 73.81364],
  [20.00898, 73.81378],
  [20.00888, 73.81402],
  [20.00882, 73.81423],
  [20.00872, 73.81482],
  [20.00866, 73.81516],
  [20.00858, 73.81558],
  [20.00831, 73.81511],
  [20.00824, 73.81527],
  [20.00818, 73.81545],
  [20.00814, 73.81559],
  [20.00811, 73.81579],
  [20.0081, 73.81596],
  [20.00937, 73.80545],
  [20.00938, 73.80563],
  [20.00925, 73.80514],
  [20.00911, 73.8037],
  [20.00895, 73.80305],
  [20.00881, 73.80273],
  [20.00876, 73.80255],
  [20.00864, 73.80202],
  [20.00855, 73.80185],
  [20.00845, 73.80166],
  [20.00839, 73.80149],
  [20.00812, 73.80121],
  [20.00747, 73.80047],
  [20.00731, 73.80052],
  [20.00709, 73.80049],
  [20.00693, 73.80048],
  [20.0068, 73.80056],
  [20.00657, 73.80067],
  [20.00653, 73.80094],
  [20.0065, 73.8011],
  [20.00662, 73.80118],
  [20.00697, 73.80125],
  [20.00746, 73.80118],
  [20.00748, 73.80152],
  [20.00755, 73.80175],
  [20.00761, 73.8019],
  [20.00769, 73.80209],
  [20.00793, 73.80269],
  [20.00749, 73.80311],
  [20.00736, 73.80322],
  [20.00715, 73.80341],
  [20.007, 73.80355],
  [20.00689, 73.80365],
  [20.00679, 73.80375],
  [20.00689, 73.80394],
  [20.00701, 73.80404],
  [20.00735, 73.80423],
  [20.00781, 73.80458],
  [20.00833, 73.80505],
  [20.00862, 73.80535],
  [20.00877, 73.80553],
  [20.00904, 73.80586],
  [20.00926, 73.80616],
  [20.00939, 73.80635],
  [20.0096, 73.80672],
  [20.00986, 73.80721],
  [20.00993, 73.80735],
  [20.01002, 73.80754],
  [20.01022, 73.80804],
  [20.01042, 73.80858],
  [20.01056, 73.80902],
  [20.01071, 73.80948],
  [20.01082, 73.80981],
  [20.01089, 73.81],
  [20.01073, 73.81043],
  [20.01046, 73.81093],
  [20.01036, 73.81116],
  [20.01, 73.81186],
  [20.00956, 73.81264],
  [20.0094, 73.81297],
  [20.00905, 73.81364],
  [20.00898, 73.81378],
  [20.00888, 73.81402],
  [20.00882, 73.81423],
  [20.00872, 73.81482],
  [20.00866, 73.81516],
  [20.00858, 73.81558],
  [20.00831, 73.81511],
  [20.0077, 73.81474],
  [20.00673, 73.81433],
  [20.00558, 73.81378],
  [20.00515, 73.81358],
  [20.00488, 73.81342],
  [20.00472, 73.81333],
  [20.00413, 73.81302],
  [20.00393, 73.81292],
  [20.00368, 73.81281],
  [20.00318, 73.81255],
  [20.00302, 73.81247],
  [20.00267, 73.81229],
  [20.00221, 73.81204],
  [20.00208, 73.81197],
  [20.0019, 73.81185],
  [20.00178, 73.81177],
  [20.00165, 73.81185],
  [20.00159, 73.81202],
  [20.00158, 73.8122],
  [20.00158, 73.81241],
  [20.00158, 73.81257],
  [20.0015, 73.8127],
  [20.00133, 73.81273],
  [20.0011, 73.81275],
  [20.00099, 73.81295],
  [20.00098, 73.81311],
  [20.00098, 73.81326],
  [20.00098, 73.81347],
  [20.00096, 73.81362],
  [20.0009, 73.81377],
  [20.00082, 73.81389],
  [20.00072, 73.81412],
  [20.00065, 73.81429],
  [20.00059, 73.81442],
  [20.00055, 73.81468],
  [20.00058, 73.81487],
  [20.00071, 73.81524],
  [20.00076, 73.81553],
  [20.00064, 73.8156],
  [20.0005, 73.81573],
  [20.0004, 73.81589],
  [20.00034, 73.81605],
  [20.00006, 73.81613],
  [19.99989, 73.81614],
  [19.99971, 73.81618],
];


// ─── UTILITY HELPERS ──────────────────────────────────────────

function formatKm(meters) {
  return (meters / 1000).toFixed(2);
}

function formatLatLng(lat, lng) {
  return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

function formatEta(seconds) {
  if (!isFinite(seconds) || seconds <= 0) return "–";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
}

function computeRouteSegments(coords) {
  const segments = [];
  let total = 0;
  for (let i = 0; i < coords.length - 1; i++) {
    const from = L.latLng(coords[i]);
    const to = L.latLng(coords[i + 1]);
    const dist = from.distanceTo(to);
    segments.push({ from, to, distance: dist, start: total, end: total + dist });
    total += dist;
  }
  return { segments, total };
}

// Closest point on route to a given latlng — returns { distAlong, minDistM }
function getClosestPointOnRoute(segments, totalLength, latLng) {
  const p = L.latLng(latLng);
  let bestDist = Infinity;
  let bestDistAlong = 0;

  for (const seg of segments) {
    const d = seg.distance;
    if (d <= 0) continue;
    const A = seg.from;
    const B = seg.to;
    for (let k = 0; k <= 30; k++) {
      const t = k / 30;
      const projLat = A.lat + t * (B.lat - A.lat);
      const projLng = A.lng + t * (B.lng - A.lng);
      const proj = L.latLng(projLat, projLng);
      const distToSeg = p.distanceTo(proj);
      const distAlong = seg.start + t * d;
      if (distToSeg < bestDist) {
        bestDist = distToSeg;
        bestDistAlong = distAlong;
      }
    }
  }
  return { distAlong: bestDistAlong, minDistM: bestDist };
}

function pointAlongRoute(segments, totalLength, distance) {
  if (!segments.length) return null;
  if (distance <= 0) return segments[0].from;
  if (distance >= totalLength) return segments[segments.length - 1].to;

  for (const seg of segments) {
    if (distance >= seg.start && distance <= seg.end && seg.distance > 0) {
      const ratio = (distance - seg.start) / seg.distance;
      const lat = seg.from.lat + (seg.to.lat - seg.from.lat) * ratio;
      const lng = seg.from.lng + (seg.to.lng - seg.from.lng) * ratio;
      return L.latLng(lat, lng);
    }
  }
  return segments[segments.length - 1].to;
}

// ─── ROUTE OPTIMIZATION (TSP: Nearest-Neighbor & 2-Opt) ───────

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function nearestNeighborTour(startIdx) {
  const n = temples.length;
  const used = new Set([startIdx]);
  const tour = [startIdx];

  while (tour.length < n) {
    const curr = temples[tour[tour.length - 1]];
    let best = -1;
    let bestDist = Infinity;
    for (let i = 0; i < n; i++) {
      if (used.has(i)) continue;
      const d = haversineKm(curr.lat, curr.lng, temples[i].lat, temples[i].lng);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    tour.push(best);
    used.add(best);
  }
  return tour;
}

function tourLength(tour) {
  let len = 0;
  for (let i = 0; i < tour.length - 1; i++) {
    const a = temples[tour[i]];
    const b = temples[tour[i + 1]];
    len += haversineKm(a.lat, a.lng, b.lat, b.lng);
  }
  len += haversineKm(
    temples[tour[tour.length - 1]].lat, temples[tour[tour.length - 1]].lng,
    temples[tour[0]].lat, temples[tour[0]].lng
  );
  return len;
}

function twoOptImprove(tour) {
  const n = tour.length;
  let improved = true;
  let tourArr = [...tour];

  while (improved) {
    improved = false;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 2; j < n; j++) {
        const j1 = (j + 1) % n;
        if (j1 === 0 && i === 0) continue;
        const a = temples[tourArr[i]];
        const b = temples[tourArr[i + 1]];
        const c = temples[tourArr[j]];
        const d = temples[tourArr[j1]];
        const before = haversineKm(a.lat, a.lng, b.lat, b.lng) + haversineKm(c.lat, c.lng, d.lat, d.lng);
        const after = haversineKm(a.lat, a.lng, c.lat, c.lng) + haversineKm(b.lat, b.lng, d.lat, d.lng);
        if (after < before - 1e-9) {
          const rev = tourArr.slice(i + 1, j + 1).reverse();
          tourArr = [...tourArr.slice(0, i + 1), ...rev, ...tourArr.slice(j + 1)];
          improved = true;
          break;
        }
      }
      if (improved) break;
    }
  }
  return tourArr;
}

// Ramkund index (start point) – find by name
const ramkundIdx = temples.findIndex((t) => t.name === "Ramkund");
const nnStartIdx = ramkundIdx >= 0 ? ramkundIdx : 0;

let nnTour = null;
let twoOptTour = null;
let nnDistKm = 0;
let twoOptDistKm = 0;

function computeOptimizedTours() {
  nnTour = nearestNeighborTour(nnStartIdx);
  nnDistKm = tourLength(nnTour);
  twoOptTour = twoOptImprove(nnTour);
  twoOptDistKm = tourLength(twoOptTour);
}

function computeBearingDeg(from, to) {
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const dLon = ((to.lng - from.lng) * Math.PI) / 180;

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

// ─── LEAFLET MAP SETUP ───────────────────────────────────────

const map = L.map("map", {
  center: [20.004, 73.800],
  zoom: 13,
  minZoom: 3,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const templeLayer = L.layerGroup().addTo(map);
const transportLayer = L.layerGroup().addTo(map);
const roadLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const roverLayer = L.layerGroup().addTo(map);
const trailLayer = L.layerGroup().addTo(map);
const processingLayer = L.layerGroup().addTo(map);
const optimizedRouteLayer = L.layerGroup(); // Shown via toggle (off by default)

// ─── CATEGORY MARKERS ────────────────────────────────────────

const templeMarkers = [];

function createAllMarkers() {
  templeLayer.clearLayers();
  transportLayer.clearLayers();
  roadLayer.clearLayers();
  templeMarkers.length = 0;

  // Religious Places — orange circles
  temples.forEach((t) => {
    const marker = L.circleMarker([t.lat, t.lng], {
      radius: 7,
      color: "#f97316",
      weight: 2,
      fillColor: "#fed7aa",
      fillOpacity: 0.9,
    }).addTo(templeLayer);

    marker.bindTooltip("", {
      direction: "top",
      opacity: 0.95,
      sticky: true,
    });

    templeMarkers.push({ temple: t, marker });
  });

  // Transportation Hubs — blue squares (using circleMarker with square style)
  transportHubs.forEach((t) => {
    const marker = L.circleMarker([t.lat, t.lng], {
      radius: 6,
      color: "#2563eb",
      weight: 2,
      fillColor: "#bfdbfe",
      fillOpacity: 0.9,
    }).addTo(transportLayer);

    marker.bindTooltip(`<strong>${t.name}</strong><br/>Transport Hub`, {
      direction: "top",
      opacity: 0.95,
      sticky: true,
    });
  });

  // Roads/Junctions — green markers
  roadsAndJunctions.forEach((t) => {
    const marker = L.circleMarker([t.lat, t.lng], {
      radius: 5,
      color: "#16a34a",
      weight: 2,
      fillColor: "#bbf7d0",
      fillOpacity: 0.85,
    }).addTo(roadLayer);

    marker.bindTooltip(`<strong>${t.name}</strong><br/>Road / Junction`, {
      direction: "top",
      opacity: 0.95,
      sticky: true,
    });
  });
}

createAllMarkers();

// ─── PROCESSING FACILITIES (from PDF: Pathardi Phata, Nirmalya sources) ──

const processingFacilities = [
  {
    name: "Pathardi Phata Solid Waste Treatment Plant",
    lat: 19.946922,
    lng: 73.765434,
    type: "treatment",
    desc: "Visited 1 Sep 2025 · Nirmalya processing",
  },
  {
    name: "Goda Ghat · Primary Nirmalya Collection",
    lat: 20.007803,
    lng: 73.792615,
    type: "collection",
    desc: "Key Nirmalya source · Godavari river",
  },
];

processingFacilities.forEach((f) => {
  const marker = L.circleMarker([f.lat, f.lng], {
    radius: 8,
    color: "#9333ea",
    weight: 2,
    fillColor: "#e9d5ff",
    fillOpacity: 0.9,
  }).addTo(processingLayer);

  marker.bindTooltip(
    `<strong>${f.name}</strong><br/>${f.desc}`,
    { direction: "top", opacity: 0.95, sticky: true }
  );
});

// ─── ROVER ROUTE & TRAIL ─────────────────────────────────────

const routePolyline = L.polyline(roverPathCoords, {
  color: "#2563eb",
  weight: 4,
  opacity: 0.8,
}).addTo(routeLayer);

const trailPolyline = L.polyline([], {
  color: "#93c5fd",
  weight: 4,
  opacity: 0.9,
}).addTo(trailLayer);

// Optimized tour polyline (2-opt order, straight lines between temples)
let optimizedPolyline = null;

function drawOptimizedRoute() {
  optimizedRouteLayer.clearLayers();
  if (!twoOptTour || twoOptTour.length < 2) return;
  const coords = twoOptTour.map((i) => [temples[i].lat, temples[i].lng]);
  coords.push(coords[0]); // close the loop
  optimizedPolyline = L.polyline(coords, {
    color: "#16a34a",
    weight: 2,
    opacity: 0.7,
    dashArray: "8, 8",
  }).addTo(optimizedRouteLayer);
}

// Fit bounds to main area (temples, transport, roads) — exclude distant processing plants
const allCoords = [
  ...temples.map((t) => [t.lat, t.lng]),
  ...transportHubs.map((t) => [t.lat, t.lng]),
  ...roadsAndJunctions.map((t) => [t.lat, t.lng]),
  ...roverPathCoords,
];
if (allCoords.length) {
  map.fitBounds(allCoords, { padding: [20, 20] });
}

const { segments: routeSegments, total: routeLengthMeters } =
  computeRouteSegments(roverPathCoords);

let templeRouteData = null; // [{ distAlong, minDistM }, ...]
function computeTempleRouteDistances() {
  if (!routeSegments) return;
  templeRouteData = temples.map((t) =>
    getClosestPointOnRoute(routeSegments, routeLengthMeters, [t.lat, t.lng])
  );
}
computeTempleRouteDistances();

// ─── ROVER ANIMATION ─────────────────────────────────────────

const updateIntervalMs = 150;

function getSpeedKmh() {
  const el = document.getElementById("rover-speed-select");
  return el ? parseInt(el.value, 10) || 12 : 12;
}

function getSpeedMps() {
  return (getSpeedKmh() * 1000) / 3600;
}

let roverDistanceMeters = 0;
let roverTotalDistanceMeters = 0;
let roverTimer = null;
let roverLatLng = null;
let lastUpdateTime = null;

const roverIcon = L.divIcon({
  className: "rover-icon",
  html: '<div class="rover-icon-inner"></div>',
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

let roverMarker = null;

function initRover() {
  roverDistanceMeters = 0;
  roverTotalDistanceMeters = 0;
  lastUpdateTime = null;

  const startPoint = pointAlongRoute(
    routeSegments,
    routeLengthMeters,
    roverDistanceMeters
  ) || (routeSegments.length ? L.latLng(routeSegments[0].from) : null);
  roverLatLng = startPoint;

  if (!startPoint) return;

  if (!roverMarker) {
    roverMarker = L.marker(startPoint, { icon: roverIcon }).addTo(roverLayer);
    roverMarker.bindPopup("<strong>Rover</strong><br>Autonomous collection unit");
  } else {
    roverMarker.setLatLng(startPoint);
  }

  updateRoverTelemetryUI();
  updateTempleDistances();
  updateTrail(true);
  setRoverRotation(0);
}

function setRoverRotation(bearingDeg) {
  if (!roverMarker) return;
  const el = roverMarker.getElement();
  if (!el) return;
  const inner = el.querySelector(".rover-icon-inner");
  if (!inner) return;
  inner.style.transform = `rotate(${bearingDeg}deg)`;
}

function updateTrail(reset = false) {
  if (reset) {
    trailPolyline.setLatLngs(roverLatLng ? [roverLatLng] : []);
    return;
  }

  const existing = trailPolyline.getLatLngs();
  if (!roverLatLng) return;
  if (!existing.length || existing[existing.length - 1].distanceTo(roverLatLng) > 5) {
    existing.push(roverLatLng);
    trailPolyline.setLatLngs(existing);
  }
}

function stepRover() {
  const now = performance.now();
  if (!lastUpdateTime) {
    lastUpdateTime = now;
    return;
  }
  const dtSec = (now - lastUpdateTime) / 1000;
  lastUpdateTime = now;

  const stepDist = getSpeedMps() * dtSec;
  roverDistanceMeters += stepDist;
  roverTotalDistanceMeters += stepDist;

  if (roverDistanceMeters > routeLengthMeters) {
    roverDistanceMeters -= routeLengthMeters;
  }

  const prevLatLng = roverLatLng;
  roverLatLng = pointAlongRoute(routeSegments, routeLengthMeters, roverDistanceMeters);

  if (roverMarker && roverLatLng) {
    roverMarker.setLatLng(roverLatLng);
    if (prevLatLng) {
      const bearing = computeBearingDeg(prevLatLng, roverLatLng);
      setRoverRotation(bearing);
    }
  }

  updateTrail();
  updateRoverTelemetryUI();
  updateTempleDistances();
}

function startRover() {
  if (roverTimer) return;
  lastUpdateTime = null;
  roverTimer = setInterval(stepRover, updateIntervalMs);
  setSystemStatus("Online · Moving", "online");
  document.getElementById("rover-status-text").textContent = "Moving";
}

function pauseRover() {
  if (roverTimer) {
    clearInterval(roverTimer);
    roverTimer = null;
  }
  setSystemStatus("Online · Paused", "paused");
  document.getElementById("rover-status-text").textContent = "Paused";
}

function resetRover() {
  pauseRover();
  initRover();
  setSystemStatus("Online · Idle", "online");
  document.getElementById("rover-status-text").textContent = "Idle";
}

// ─── UI UPDATES ──────────────────────────────────────────────

function setSystemStatus(label, mode) {
  const pill = document.getElementById("system-status-pill");
  const dot = pill.querySelector(".status-dot");
  const text = document.getElementById("system-status-text");

  text.textContent = label;
  dot.classList.remove("online", "paused", "offline");
  if (mode === "online") dot.classList.add("online");
  else if (mode === "paused") dot.classList.add("paused");
  else dot.classList.add("offline");
}

function updateRoverTelemetryUI() {
  const speedEl = document.getElementById("rover-speed-text");
  const distanceEl = document.getElementById("rover-distance-text");
  const coordsEl = document.getElementById("rover-coords-text");
  const progressEl = document.getElementById("rover-progress-text");
  const etaEl = document.getElementById("rover-eta-text");

  const progress =
    routeLengthMeters > 0 ? (roverDistanceMeters / routeLengthMeters) * 100 : 0;
  const speedKmh = getSpeedKmh();
  const remainingMeters = Math.max(routeLengthMeters - roverDistanceMeters, 0);
  const etaSeconds = remainingMeters / getSpeedMps();

  speedEl.textContent = `${speedKmh} km/h`;
  distanceEl.textContent = `${formatKm(roverTotalDistanceMeters)} km`;
  progressEl.textContent = `${progress.toFixed(1)}%`;
  etaEl.textContent = formatEta(etaSeconds);

  if (roverLatLng) {
    coordsEl.textContent = formatLatLng(roverLatLng.lat, roverLatLng.lng);
  } else {
    coordsEl.textContent = "–, –";
  }

  updateEstimatedYield();
}

// Estimated Nirmalya yield based on temples passed (route-distance accurate)
const KG_PER_TEMPLE = 6; // rough avg per temple visit
const COMPOST_RATIO = 0.25; // 100–200 kg → 40 kg per PDF

function updateEstimatedYield() {
  const templesPassedEl = document.getElementById("temples-passed-text");
  const estWasteEl = document.getElementById("est-waste-text");
  const estCompostEl = document.getElementById("est-compost-text");
  const estFreshenerEl = document.getElementById("est-freshener-text");
  if (!templesPassedEl) return;

  // Count only temples where route passes within 350m AND we've passed that point
  const MAX_PASS_DISTANCE_M = 350;
  let count = 0;
  if (templeRouteData && templeRouteData.length === temples.length) {
    for (let idx = 0; idx < temples.length; idx++) {
      const { distAlong, minDistM } = templeRouteData[idx];
      if (minDistM <= MAX_PASS_DISTANCE_M && roverDistanceMeters >= distAlong) count++;
    }
  }
  const wasteKg = count * KG_PER_TEMPLE;
  const compostKg = Math.round(wasteKg * COMPOST_RATIO);
  const freshenerL = (count > 0 ? (wasteKg / 3 * 11).toFixed(1) : "0"); // 3 kg → ~11 L per PDF

  templesPassedEl.textContent = count;
  if (estWasteEl) estWasteEl.textContent = wasteKg;
  if (estCompostEl) estCompostEl.textContent = compostKg;
  if (estFreshenerEl) estFreshenerEl.textContent = freshenerL;
}

function updateTempleDistances() {
  if (!roverLatLng) {
    templeMarkers.forEach(({ temple, marker }) => {
      const html = `
        <strong>${temple.name}</strong><br/>
        Lat: ${temple.lat.toFixed(5)}<br/>
        Lng: ${temple.lng.toFixed(5)}<br/>
        Distance from rover: –
      `;
      marker.setTooltipContent(html);
    });
    return;
  }

  templeMarkers.forEach(({ temple, marker }) => {
    const dist = roverLatLng.distanceTo([temple.lat, temple.lng]);
    const distKm = (dist / 1000).toFixed(2);
    const html = `
      <strong>${temple.name}</strong><br/>
      Lat: ${temple.lat.toFixed(5)}<br/>
      Lng: ${temple.lng.toFixed(5)}<br/>
      Distance from rover: ${distKm} km
    `;
    marker.setTooltipContent(html);
  });

  const listEl = document.getElementById("temple-list");
  if (!listEl) return;
  Array.from(listEl.children).forEach((row, idx) => {
    const t = temples[idx];
    if (!t) return;
    const dist = roverLatLng.distanceTo([t.lat, t.lng]);
    const distKm = (dist / 1000).toFixed(2);
    const metaEl = row.querySelector(".temple-meta");
    if (metaEl) metaEl.textContent = `${distKm} km from rover`;
  });
}

function buildTempleList() {
  const listEl = document.getElementById("temple-list");
  listEl.innerHTML = "";

  temples.forEach((t, idx) => {
    const row = document.createElement("div");
    row.className = "temple-row";

    const main = document.createElement("div");
    main.className = "temple-main";

    const nameEl = document.createElement("div");
    nameEl.className = "temple-name";
    nameEl.textContent = `${idx + 1}. ${t.name}`;

    const coordsEl = document.createElement("div");
    coordsEl.className = "temple-coords";
    coordsEl.textContent = formatLatLng(t.lat, t.lng);

    main.appendChild(nameEl);
    main.appendChild(coordsEl);

    const meta = document.createElement("div");
    meta.className = "temple-meta";
    meta.textContent = "–";

    row.appendChild(main);
    row.appendChild(meta);

    listEl.appendChild(row);
  });
}

// ─── LAYER TOGGLE CONTROLS ──────────────────────────────────

function setupLayerToggles() {
  const toggles = {
    "toggle-temples": templeLayer,
    "toggle-transport": transportLayer,
    "toggle-roads": roadLayer,
    "toggle-route": routeLayer,
    "toggle-processing": processingLayer,
    "toggle-optimized": optimizedRouteLayer,
  };

  const optDistEl = document.getElementById("optimized-dist");
  if (optDistEl && twoOptDistKm > 0) {
    optDistEl.textContent = `(${twoOptDistKm.toFixed(1)} km)`;
  }

  const nnEl = document.getElementById("nn-dist");
  const twoOptEl = document.getElementById("twoopt-dist");
  if (nnEl) nnEl.textContent = nnDistKm > 0 ? `${nnDistKm.toFixed(1)} km` : "–";
  if (twoOptEl) twoOptEl.textContent = twoOptDistKm > 0 ? `${twoOptDistKm.toFixed(1)} km` : "–";

  for (const [id, layer] of Object.entries(toggles)) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.addEventListener("change", (e) => {
      if (e.target.checked) {
        map.addLayer(layer);
      } else {
        map.removeLayer(layer);
      }
    });
  }
}

// ─── INIT ─────────────────────────────────────────────────────

document.getElementById("btn-start").addEventListener("click", startRover);
document.getElementById("btn-pause").addEventListener("click", pauseRover);
document.getElementById("btn-reset").addEventListener("click", resetRover);

initRover();
buildTempleList();

try {
  computeOptimizedTours();
  drawOptimizedRoute();
} catch (e) {
  console.warn("Route optimization skipped:", e);
}
setupLayerToggles();

// Ensure Leaflet recalculates dimensions after layout settles
setTimeout(() => {
  map.invalidateSize();
}, 200);

// ─── Raspberry Pi stream connection state ─────────────────────

(function () {
  const STREAM_TIMEOUT_MS = 12000;
  const overlay = document.getElementById("stream-overlay");
  const overlayMessage = document.getElementById("stream-overlay-message");
  const iframe = document.getElementById("stream-iframe");

  if (!overlay || !iframe) return;

  let resolved = false;

  function showNotConnected() {
    if (resolved) return;
    resolved = true;
    overlay.classList.add("offline");
    overlay.querySelector(".stream-overlay-title").textContent = "Raspberry Pi not connected";
    overlayMessage.textContent =
      "Ensure the rover is on the same network and the stream is running on port 8766 (raspberrypi.local:8766).";
    overlayMessage.setAttribute("role", "status");
  }

  const timeoutId = setTimeout(showNotConnected, STREAM_TIMEOUT_MS);

  iframe.addEventListener("load", () => {
    clearTimeout(timeoutId);
    resolved = true;
    overlay.classList.add("hidden");
  }, { once: true });
})();
