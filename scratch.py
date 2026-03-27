import urllib.request
import re

html = urllib.request.urlopen("https://raftaaradventure.in/about/").read().decode("utf-8")
names = ["Birend", "Laxman Rana", "Diamond Dano", "Khilaf Beniwal", "Kalam Patwal", "Raju Pajari"]
for name in names:
    idx = html.find(name)
    if idx != -1:
        img_idx = html.rfind("<img", 0, idx)
        if img_idx != -1:
            match = re.search(r'src="([^"]+)"', html[img_idx:idx])
            if match:
                print(name, match.group(1))
