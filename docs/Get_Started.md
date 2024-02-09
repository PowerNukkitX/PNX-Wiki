---
slug: "./get-started"
title: "⚒️ Get Started"
sidebar_position: 2
---
# Quick Start

Follow this tutorial to set up your first PowerNukkitX server in ten minutes (excluding download time). This tutorial will guide you through using the PowerNukkitX Command-Line Interface (CLI) to quickly install and start the server.

:::note
If you're using the Legacy version of PNX, please refer to our development documentation to upgrade to version 2.0.
:::

## Download the CLI

Go to [Github Releases](https://github.com/PowerNukkitX/PNX-CLI/releases) to download the command-line tool. Download the version that matches your operating system:

| Operating System | CPU          | Name                | Note                      |
|------------------|--------------|---------------------|---------------------------|
| Windows          | x86(x64)     | PNX-CLI-Windows-x86 |                           |
| Linux            | x86(x64)     | PNX-CLI-Linux-x86   |                           |
| Linux            | arm(aarch64) | PNX-CLI-Linux-arm   |                           |
| Other Platforms  | Any          | PNX-CLI-Jar         | Requires Java installation|

After downloading, extract the files and extract the executable file.

## Install the CLI

After downloading, extract the files and extract the executable file into a folder, and PNX-CLI is installed.

Please note, the path **cannot contain spaces**! Otherwise, the CLI cannot configure the PNX environment properly.

## Start the PNX Server

### Windows

1. Double-click `pnx.exe` to run.
2. It will ask which version of the core you want to use, enter `1` and press Enter to use the latest version.
3. It will then ask if you want to complete the dependency library, enter `1` and press Enter to choose the `true` option.
4. It will then ask you which language you want to use, enter `chs` to select Chinese (Simplified).
5. Your PNX server has been successfully started. You can further configure the server or enter `stop` to stop the server.
6. Remember, after entering `stop`, you need to press Enter within 10 seconds after stopping the server, otherwise, it will automatically restart.

### Linux

1. Open a terminal, type `./pnx` and press Enter.
2. It will ask which version of the core you want to use, enter `1` and press Enter to use the latest version.
3. It will then ask if you want to complete the dependency library, enter `1` and press Enter to choose the `true` option.
4. It will then ask you which language you want to use, enter `chs` to select Chinese (Simplified).
5. Your PNX server has been successfully started. You can further configure the server or enter `stop` to stop the server.
6. Remember, after entering `stop`, you need to press Enter within 10 seconds after stopping the server, otherwise, it will automatically restart.

## Advanced Usage of CLI

- Refer to [PNX-CLI Launcher Beginner's Guide](./faq/PNX-CLI)

## Configure Your PNX Server

- Refer to [Server.properties Configuration Introduction](./config/server.properties)
- Refer to [Nukkit.yml Configuration Introduction](./config/nukkit.yml)