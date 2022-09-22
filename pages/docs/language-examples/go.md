---
description: Generate UUIDs using nothing but the standard library in Go with the powerful net/http package.
---

# Go

## net/http

```go
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	resp, err := http.Get("https://uuidgen.dev/")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	fmt.Println(string(body)) // fmt.Printf("%s\n", body)
}
```
