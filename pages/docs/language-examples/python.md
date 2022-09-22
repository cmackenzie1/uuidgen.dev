---
description: Generate UUIDs in Python using the popular requests or urllib3 libraries.
---

# Python

## [requests](https://requests.readthedocs.io/en/latest/)

```bash
pip install requests
```

```python
import requests

uuid = requests.get("https://uuidgen.dev/").text
print(uuid)
```

## [urllib3](https://urllib3.readthedocs.io/en/stable/)

```bash
pip install urllib3
```

```python
import urllib3

http = urllib3.PoolManager()
r = http.request('GET', 'https://uuidgen.dev/')
print(r.data.decode('utf-8'))
```
