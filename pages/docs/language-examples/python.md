# Python

## [requests](https://requests.readthedocs.io/en/latest/)

```python
import requests

uuid = requests.get("https://uuidgen.dev/").text
print(uuid)
```

## [urllib3](https://urllib3.readthedocs.io/en/stable/)

```python
import urllib3

http = urllib3.PoolManager()
r = http.request('GET', 'https://uuidgen.dev/')
print(r.data.decode('utf-8'))
```

