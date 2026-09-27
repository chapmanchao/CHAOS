# CHAOS

<p align="center">
  <img src="docs/images/readme-cover-zh.jpg" alt="CHAOS — Claude Code 桌面工作台" width="960">
</p>

<div align="center">

[![Windows x64](https://img.shields.io/badge/Windows-x64-0078D4?logo=windows&logoColor=white)](https://github.com/chapmanchao/CHAOS/releases)
[![Electron](https://img.shields.io/badge/Electron-桌面应用-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Bun](https://img.shields.io/badge/Bun-运行时-f9f1e1?logo=bun&logoColor=black)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![中文](https://img.shields.io/badge/简体中文-当前-blue)](README.zh-CN.md)
[![English](https://img.shields.io/badge/English-Available-green)](README.md)

**简体中文** · [English](README.md)

</div>

CHAOS 是一个面向开发者的 Claude Code 桌面工作台。它把多会话管理、代码修改审阅、终端、模型配置和权限审批集中在一个桌面应用中，帮助你更直观地使用 AI 完成编码、调试和项目维护工作。

本仓库是基于开源项目修改和维护的个人版本，当前重点提供 **Windows 64 位桌面版本**。项目保留了原项目的开源协议，并会根据个人使用需求持续调整。

<p align="center">
  <a href="#下载安装">下载安装</a> ·
  <a href="#主要功能">主要功能</a> ·
  <a href="#从源码构建">从源码构建</a> ·
  <a href="#配置模型服务">配置模型服务</a> ·
  <a href="#反馈与贡献">反馈与贡献</a>
</p>

---

## 下载安装

前往本仓库的 [Releases](https://github.com/chapmanchao/CHAOS/releases) 页面，下载 Windows 64 位安装程序：

```text
CHAOS-版本号-win-x64.exe
```

安装说明：

1. 双击 `.exe` 安装包并选择安装目录。
2. 如果 Windows SmartScreen 提示“Windows 已保护你的电脑”，点击“更多信息”→“仍要运行”。
3. 首次启动后，在设置中填写模型服务商、API Key 和默认模型。
4. 如果应用无法启动，请先确认系统为 Windows 10/11 64 位，并查看 Issues 中的已知问题。

当前安装包为未进行商业代码签名的个人构建版本，因此首次运行可能出现安全提示。

## 主要功能

- **多会话工作台**：同时管理多个项目和会话，保留会话历史。
- **项目与 Worktree**：从指定分支启动会话，也可以使用隔离的 Worktree。
- **代码修改审阅**：查看本轮修改的文件和逐行 Diff，确认后再继续工作。
- **内置终端**：在应用中运行命令并查看实时输出。
- **模型选择**：支持 Claude、ChatGPT、Grok、第三方兼容接口以及本地模型端点。
- **MCP 管理**：通过图形界面配置 MCP Server，支持 STDIO、SSE 和 Streamable HTTP。
- **SubAgent 与 Agent Teams**：创建子代理并查看多代理协作过程。
- **Workflow 编排**：以并发或流水线方式调度多个代理任务。
- **权限审批**：对命令、工具调用和敏感操作进行图形化确认。
- **浏览器预览**：在应用内预览本地 Web 页面，及时验证修改结果。
- **Computer Use**：在获得授权后，让 Agent 进行截图、点击和输入操作。
- **技能与主题**：管理第三方技能，并支持多套界面主题。
- **远程与自动化**：支持 H5 远程访问、部分 IM 接入和定时任务功能。

具体功能以当前版本实际界面为准。部分功能需要对应的模型能力、系统权限或第三方服务支持。

## 配置模型服务

启动 CHAOS 后进入设置页面，根据所使用的模型服务商填写：

- API Key 或登录凭据
- API Base URL（如果服务商要求）
- 模型名称
- 默认权限模式

请不要把 API Key 写入源码、提交到 GitHub，或发送到公开 Issue。建议使用应用设置或本地 `.env` 文件，并确保 `.env` 已被 `.gitignore` 忽略。

## 从源码构建

### 环境要求

- Windows 10/11 64 位
- Macos Intel 版本

### Windows x64 打包

```powershell
cd F:\cc_chaos-main\desktop
bun run build:windows-x64
```

构建产物位于：

```text
desktop\build-artifacts\windows-x64\
```

其中：

- `CHAOS-版本号-win-x64.exe`：Windows x64 NSIS 安装包
- `win-unpacked/`：解压后的免安装应用目录
- `BUILD_INFO.txt`：本次构建信息

## 从源码启动 CLI

如果需要调试底层 CLI 或本地服务，可以在项目根目录执行：

```powershell
bun install
Copy-Item .env.example .env
bun run start
```

更多配置可以参考 [`docs/cli`](docs/cli/) 目录。

## 项目结构

```text
CHAOS/
├─ desktop/       Electron + React 桌面端
├─ src/           CLI、本地服务和共享运行时
├─ adapters/      IM 平台适配器
├─ native/        原生辅助组件
├─ scripts/       构建、测试和质量检查脚本
├─ docs/          项目文档
└─ tests/         测试与质量门禁
```

## 反馈与贡献

如果你遇到问题，请提供以下信息后提交 [Issue](https://github.com/chapmanchao/CHAOS/issues)：

- Windows 版本和系统架构
- CHAOS 版本号
- 复现步骤
- 完整错误信息或日志
- 是否使用了代理、本地模型或第三方 API

欢迎提交 Bug 修复、功能建议和文档改进。提交代码前请先确认没有包含 API Key、个人配置、`node_modules` 或构建产物。

## 项目来源与许可证

本项目基于 [CHAOS](https://github.com/chapmanchao/CHAOS) 开源项目修改。感谢原作者及所有开源项目贡献者提供的代码和实践经验。

项目遵循 [MIT License](LICENSE)。如需重新发布或进行较大范围修改，请保留原项目的许可证和相关致谢信息。

## 相关链接

- [GitHub 仓库](https://github.com/chapmanchao/CHAOS)
- [Issues](https://github.com/chapmanchao/CHAOS/issues)
- [Releases](https://github.com/chapmanchao/CHAOS/releases)
- [英文 README](README.md)

如果 CHAOS 对你有帮助，欢迎在 GitHub 点一个 ⭐ Star。
