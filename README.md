# Marina API SDK [![Latest Release](https://badge.fury.io/js/@lvckyworld%2Fmarina-api.svg)](https://www.npmjs.com/package/@lvckyworld/marina-api)

![Banner](https://i.lvckyworld.net/lvcky/marina-api/banner.png)

<div align="center">

[![Docs](https://img.shields.io/badge/-DOCUMENTATION-007396.svg?logo=Read%20the%20Docs&logoColor=white&longCache=true&style=for-the-badge)](https:///docs.lvckyworld.net/marina-api-sdk/) [![Website](https://img.shields.io/badge/-WEBSITE-4285F4.svg?logo=googlechrome&logoColor=white&longCache=true&style=for-the-badge)](https://lvckyworld.net/)  [![Discord](https://img.shields.io/badge/-DISCORD-5865F2.svg?logo=Discord&logoColor=white&longCache=true&style=for-the-badge)](https://lvckyworld.net/discord/)
</div>

The official Marina-API as NPM PACKAGE

## Install the Package

First you need to install the package using npm

```bash
npm install @lvckyworld/marina-api
```

## Import the Package

#### TypeScript

```ts
import {MarinaAPI} from "@lvckyworld/marina-api"
```

#### JavaScript

```js
const {MarinaAPI} = require("@lvckyworld/marina-api");
```

## Usage Example

```ts
import {MarinaAPI} from "@lvckyworld/marina-api"; // added
import {Message} from "discord.js";
import {LeaveSeverPCommand} from "./module/LeaveSeverPCommand";

export class MessageListener {
    public static async onMessage(message: Message) {
        const prefix = ".";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const command = message.content.toLowerCase().slice(prefix.length).split(" ")[0];
        const args = message.content.slice(prefix.length).split(" ").slice(1);

        if (command === "leave") {
            if (!await MarinaAPI.isLvckyWorldAdmin(message.author.id)) return; // added
            new LeaveSeverPCommand().execute(message, args);
        }
    }
}

```

## Marina API Funktionen

Hier ist eine kurze Zusammenfassung aller Funktionen in der `MarinaAPI.ts` Datei, zusammen mit Codebeispielen für jede
Funktion:

### isLvckyWorldAdmin

Überprüft, ob die gegebene Mitglieds-ID ein LvckyWorld-Admin ist.

```ts
const isAdmin = await MarinaAPI.isLvckyWorldAdmin('memberId');
```

> *Bitte ersetzen Sie `'memberId'` durch die tatsächliche ID des Mitglieds, die Sie überprüfen möchten.*

### isGlobalBanned

Überprüft, ob ein Mitglied global gesperrt ist.

```ts
const isBanned = await MarinaAPI.isGlobalBanned('memberId');
```

> *Bitte ersetzen Sie `'memberId'` durch die tatsächliche ID des Mitglieds, die Sie überprüfen möchten.*

### getGlobalBan

Ruft das globale Verbot für ein Mitglied ab.

```ts
const ban = await MarinaAPI.getGlobalBan('memberId');
```

> *Bitte ersetzen Sie `'memberId'` durch die tatsächliche ID des Mitglieds, die Sie überprüfen möchten.*

### getGlobalBanList

Ruft die globale Verbotsliste von LvckyWorld ab.

```ts
const banList = await MarinaAPI.getGlobalBanList();
```

### getLvckyWorldAdmins

Ruft die Administratoren von LvckyWorld ab.

```ts
const admins = await MarinaAPI.getLvckyWorldAdmins();
```

### getLvckyWorldTeam

Ruft die Teammitglieder von LvckyWorld ab.

```ts
const team = await MarinaAPI.getLvckyWorldTeam();
```

### getDiscordMember

Ruft die Informationen eines Discord-Mitglieds basierend auf ihrer ID ab.

```ts
const member = await MarinaAPI.getDiscordMember('memberId');
```

> *Bitte ersetzen Sie `'memberId'` durch die tatsächliche ID des Mitglieds, die Sie überprüfen möchten.*