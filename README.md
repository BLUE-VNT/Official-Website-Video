# Lumiere Video Official Website

Hexo 多语言官网，支持 `/zh-cn/`、`/en/`、`/ja/` 三个语言入口。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `public/`。

## GitHub Pages 部署

仓库已包含 GitHub Actions 工作流：

```text
.github/workflows/deploy-pages.yml
```

在 GitHub 仓库中进入 `Settings -> Pages`，将 `Build and deployment` 的 `Source` 设置为 `GitHub Actions`。之后推送到 `main` 分支，或在 Actions 页面手动运行 `Deploy GitHub Pages`，即可发布站点。

如果部署到项目子路径，例如 `https://username.github.io/repository/`，请将 `_config.yml` 中的 `url` 和 `root` 改成对应地址：

```yaml
url: https://username.github.io/repository
root: /repository/
```
