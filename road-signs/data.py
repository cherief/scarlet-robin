import json



with open('road-signs.json') as data_file:    
    data = json.load(data_file)

data = data['data']

print(data[0])

output  = ""

preamble = """{
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "Data from data.act.gov.au",
  "timestamp": "2016-04-24T01:03:02Z",
  "features": [
            """
output = output + preamble

postamble = '\n ] \n} '

new_feature = '{{ \n "type": "Feature", \n "id": "node/{0}", \n "properties": {{ \n    "@id": "node/{0}", \n "name": "{1}", \n "suburb": "{2}", \n "sign_type1": "{3}", \n "sign_type2": "{4}", \n "sign_type3": "{5}", \n "@timestamp": "{6}" \n }}, \n "geometry": {{\n "type": "Point", \n "coordinates": [ \n {7}, \n {8} \n] \n    }} \n }} '

for sign in data:
    
    suburb = sign[13]


    #print(suburb)
    if (suburb != None):
        node_number = sign[0]
        sign_type1 = sign[10]
        sign_type2 = sign[12]
        sign_name = sign[14]
        sign_type3 = sign[15]
        lat = sign[19]
        lon = sign[20]
        timestamp = '2016-04-24T01:03:02Z'
        new_line = new_feature.format(node_number,sign_name,suburb,sign_type1,sign_type2,sign_type3,timestamp,lon,lat)
        output = output + new_line + "\n,\n"

output = output + postamble

#write geojson output to file
f = open("road-signs.geojson","w+")
f.write(output)
f.close()

