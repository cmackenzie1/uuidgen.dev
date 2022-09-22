---
description: Generate UUIDs using Kotlin
---

# Kotlin

## [ktor](https://ktor.io/docs/getting-started-ktor-client.html)

```ini title=gradle.properties
ktor_version=2.1.1
```

```kotlin title=build.gradle.kts
dependencies {
    implementation("io.ktor:ktor-client-core:$ktor_version")
    implementation("io.ktor:ktor-client-cio:$ktor_version")
}
```

```kotlin title=Main.kt
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*

val response: HttpResponse = client.get("https://uuidgen.dev/")
val uuid: String = httpResponse.body()
println("${uuid}")
```
