import csv
import json
import sys

# Open the CSV
f = open(sys.argv[1], 'r')
# Change each fieldname to the appropriate field name. I know, so difficult.
# reader = csv.DictReader(f, fieldnames = ( "fieldname0","fieldname1","fieldname2","fieldname3" ))
reader = csv.DictReader(f, fieldnames=("timestamp", "name", "occupation", "knowledge", "photo", "profiles"), delimiter='\t')
# Parse the CSV into JSON
out = json.dumps([row for row in reader], ensure_ascii=False, indent=2)
# out = [row for row in reader]
# Save the JSON
print(out)
