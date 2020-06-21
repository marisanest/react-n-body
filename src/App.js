import React from 'react';
import './App.css';
import { ResponsiveVoronoi } from '@nivo/voronoi'

function App() {
  const data = [
      {
        "id": 0,
        "x": 77.85857426525035,
        "y": 29.30000816269631
      },
          {
            "id": 1,
            "x": 19.281872970122826,
            "y": 17.30826301818904
          },
          {
            "id": 2,
            "x": 18.448545884492653,
            "y": 67.88413146239103
          },
          {
            "id": 3,
            "x": 90.68358441961573,
            "y": 31.51445487812723
          },
          {
            "id": 4,
            "x": 82.6189687028563,
            "y": 77.9275329933951
          },
          {
            "id": 5,
            "x": 70.98092591799721,
            "y": 89.23276172267099
          },
          {
            "id": 6,
            "x": 38.97611136177434,
            "y": 87.59553914827072
          },
          {
            "id": 7,
            "x": 29.193970992708508,
            "y": 78.95896884743563
          },
          {
            "id": 8,
            "x": 5.839747862296596,
            "y": 53.414813262522756
          },
          {
            "id": 9,
            "x": 54.86040163084351,
            "y": 50.10810515566799
          },
          {
            "id": 10,
            "x": 44.775623017569785,
            "y": 65.41467111395475
          },
          {
            "id": 11,
            "x": 48.676319853058025,
            "y": 38.44964176034678
          },
          {
            "id": 12,
            "x": 34.04955015728448,
            "y": 31.04024502435978
          },
          {
            "id": 13,
            "x": 75.1410227269573,
            "y": 26.612803854063884
          },
          {
            "id": 14,
            "x": 59.89270346173483,
            "y": 10.878286076127154
          },
          {
            "id": 15,
            "x": 23.027547843490126,
            "y": 11.062684537408597
          },
          {
            "id": 16,
            "x": 83.4576243082706,
            "y": 33.392818110762626
          },
          {
            "id": 17,
            "x": 80.41501403896534,
            "y": 85.53635190943342
          },
          {
            "id": 18,
            "x": 51.35161375220787,
            "y": 94.98908122204035
          },
          {
            "id": 19,
            "x": 6.212276208451728,
            "y": 71.94118820485986
          },
          {
            "id": 20,
            "x": 35.43217095878957,
            "y": 2.0586479387743495
          },
          {
            "id": 21,
            "x": 60.41841233856387,
            "y": 89.01488166564874
          },
          {
            "id": 22,
            "x": 36.715902607303704,
            "y": 0.5225151444113951
          },
          {
            "id": 23,
            "x": 81.94840612738294,
            "y": 15.111243268074714
          },
          {
            "id": 24,
            "x": 76.51682144579803,
            "y": 38.19583079405937
          },
          {
            "id": 25,
            "x": 94.47883758546338,
            "y": 32.383260268279976
          },
          {
            "id": 26,
            "x": 90.23934920406029,
            "y": 69.14547704628247
          },
          {
            "id": 27,
            "x": 17.832630670191453,
            "y": 80.17549894766063
          },
          {
            "id": 28,
            "x": 12.609753053135119,
            "y": 99.46163985430707
          },
          {
            "id": 29,
            "x": 35.84587542817157,
            "y": 77.69778597991123
          },
          {
            "id": 30,
            "x": 68.81222934524686,
            "y": 62.71030708615359
          },
          {
            "id": 31,
            "x": 94.37770700211294,
            "y": 44.14072186095026
          },
          {
            "id": 32,
            "x": 45.433818773845914,
            "y": 65.76174111506694
          },
          {
            "id": 33,
            "x": 17.198025438227262,
            "y": 85.48255406983722
          },
          {
            "id": 34,
            "x": 56.554083809179744,
            "y": 58.167503726522
          },
          {
            "id": 35,
            "x": 67.08215100608761,
            "y": 52.399834686102096
          },
          {
            "id": 36,
            "x": 21.509732052570698,
            "y": 80.60198423397023
          },
          {
            "id": 37,
            "x": 27.28904171883011,
            "y": 56.41422401541858
          },
          {
            "id": 38,
            "x": 55.515198207580596,
            "y": 34.37495574074136
          },
          {
            "id": 39,
            "x": 12.297174642110974,
            "y": 55.3869935361297
          },
          {
            "id": 40,
            "x": 82.35578836856942,
            "y": 66.5026421254647
          },
          {
            "id": 41,
            "x": 70.92562678634995,
            "y": 42.21842827877354
          },
          {
            "id": 42,
            "x": 17.079734161352356,
            "y": 68.54507815233649
          },
          {
            "id": 43,
            "x": 91.6941336581691,
            "y": 47.25888060614783
          },
          {
            "id": 44,
            "x": 99.48812038492125,
            "y": 57.73687462882404
          },
          {
            "id": 45,
            "x": 11.495273563790342,
            "y": 83.88100080773964
          },
          {
            "id": 46,
            "x": 46.95852640562841,
            "y": 28.162680872284263
          },
          {
            "id": 47,
            "x": 32.158093270337254,
            "y": 56.10290271361369
          },
          {
            "id": 48,
            "x": 24.125860634337148,
            "y": 1.13641846475947
          },
          {
            "id": 49,
            "x": 21.160138072492263,
            "y": 70.81328041593487
          },
          {
            "id": 50,
            "x": 99.64216335039171,
            "y": 58.32229699361826
          },
          {
            "id": 51,
            "x": 50.129698685429666,
            "y": 3.094268727216498
          },
          {
            "id": 52,
            "x": 9.586425088843287,
            "y": 88.71837838071693
          },
          {
            "id": 53,
            "x": 37.086506439215206,
            "y": 46.38021939110342
          },
          {
            "id": 54,
            "x": 80.2436220064686,
            "y": 87.0372580843034
          },
          {
            "id": 55,
            "x": 66.19660532057566,
            "y": 32.63538052232209
          },
          {
            "id": 56,
            "x": 16.389141373249984,
            "y": 2.1259605445011154
          },
          {
            "id": 57,
            "x": 46.66773509192244,
            "y": 65.45550625773797
          },
          {
            "id": 58,
            "x": 30.501802218532582,
            "y": 87.80354304541925
          },
          {
            "id": 59,
            "x": 73.81407106983768,
            "y": 78.11213265078662
          },
          {
            "id": 60,
            "x": 86.71949678120818,
            "y": 77.13663413008123
          },
          {
            "id": 61,
            "x": 66.20301261592536,
            "y": 83.68785320943645
          },
          {
            "id": 62,
            "x": 14.572958370594801,
            "y": 31.80627385733432
          },
          {
            "id": 63,
            "x": 31.627406404990467,
            "y": 4.167509600098462
          },
          {
            "id": 64,
            "x": 21.053235965008565,
            "y": 98.47900584962224
          },
          {
            "id": 65,
            "x": 62.51746909498996,
            "y": 69.85272088836798
          },
          {
            "id": 66,
            "x": 87.26542954092609,
            "y": 71.46977015121585
          },
          {
            "id": 67,
            "x": 73.30324436627464,
            "y": 13.706400165535214
          },
          {
            "id": 68,
            "x": 44.29554836158933,
            "y": 48.71475914382795
          },
          {
            "id": 69,
            "x": 56.55641095235797,
            "y": 35.350486170914095
          },
          {
            "id": 70,
            "x": 70.12779084926983,
            "y": 31.938680644560847
          },
          {
            "id": 71,
            "x": 58.20557434422848,
            "y": 90.70394248430027
          },
          {
            "id": 72,
            "x": 82.55076028407251,
            "y": 15.772283963327016
          },
          {
            "id": 73,
            "x": 28.813704241444448,
            "y": 68.25467120371378
          },
          {
            "id": 74,
            "x": 4.139565577620408,
            "y": 44.40154831557661
          },
          {
            "id": 75,
            "x": 41.84951857035188,
            "y": 86.77345238023359
          },
          {
            "id": 76,
            "x": 16.32185712400238,
            "y": 10.019015441705337
          },
          {
            "id": 77,
            "x": 48.408106505321946,
            "y": 99.95507736021898
          },
          {
            "id": 78,
            "x": 66.93164330611394,
            "y": 94.88348543457074
          },
          {
            "id": 79,
            "x": 12.805252962906621,
            "y": 76.82284221594709
          },
          {
            "id": 80,
            "x": 34.777530906499706,
            "y": 95.51010621591817
          },
          {
            "id": 81,
            "x": 67.27494009525495,
            "y": 16.008632642393827
          },
          {
            "id": 82,
            "x": 97.55166161213711,
            "y": 25.986690250071565
          },
          {
            "id": 83,
            "x": 16.98692516675311,
            "y": 68.8371998147426
          },
          {
            "id": 84,
            "x": 91.39174757067107,
            "y": 29.313648621162013
          },
          {
            "id": 85,
            "x": 20.836205392679474,
            "y": 62.71928394312707
          },
          {
            "id": 86,
            "x": 71.9403169092445,
            "y": 63.52280053456163
          },
          {
            "id": 87,
            "x": 23.818470831089698,
            "y": 65.50294430192909
          },
          {
            "id": 88,
            "x": 7.566076893887885,
            "y": 25.173592037591398
          },
          {
            "id": 89,
            "x": 15.732890153935507,
            "y": 82.6043335373132
          },
          {
            "id": 90,
            "x": 64.96417957818505,
            "y": 36.244012878459245
          },
          {
            "id": 91,
            "x": 36.65095154826825,
            "y": 78.97782079918873
          },
          {
            "id": 92,
            "x": 56.01168985575606,
            "y": 17.939930065776323
          },
          {
            "id": 93,
            "x": 38.354653984655826,
            "y": 76.10737771736473
          },
          {
            "id": 94,
            "x": 45.03171237339237,
            "y": 51.12085581286592
          },
          {
            "id": 95,
            "x": 21.658382141886978,
            "y": 88.35962226723922
          },
          {
            "id": 96,
            "x": 0.9582500531451377,
            "y": 47.70848277892701
          },
          {
            "id": 97,
            "x": 2.777463165287708,
            "y": 67.07806394087964
          },
          {
            "id": 98,
            "x": 48.385749360426544,
            "y": 38.200315166033704
          },
          {
            "id": 99,
            "x": 69.79095529511493,
            "y": 4.679987980441136
          }
      ]

  return (
    <div className="App">
        <div className="Chart">
            <ResponsiveVoronoi
                data={data}
                xDomain={[ 0, 100 ]}
                yDomain={[ 0, 100 ]}
                margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
                enableCells={false}
                cellLineColor="#282c34"
                pointSize={4}
                pointColor="#ffffff"
            />
        </div>
    </div>
  );
}

export default App;
