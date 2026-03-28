# Criar repositório no GitHub

Para subir o projeto no GitHub, execute os seguintes comandos:

```bash
cd /data/.openclaw/workspace/myclinic-app

# Substitua <USERNAME> pelo seu username do GitHub
git remote add origin https://github.com/<USERNAME>/myclinic-odonto.git

# Substitua <TOKEN> por um GitHub Personal Access Token com permissão 'repo'
git push -u https://<TOKEN>@github.com/<USERNAME>/myclinic-odonto.git main
```

Ou, se tiver o `gh` CLI instalado:

```bash
gh repo create myclinic-odonto --public --source=. --remote=origin --push
```

O repositório já está preparado com:
- ✅ Estrutura Docker Compose
- ✅ Frontend Next.js configurado
- ✅ Backend NestJS configurado
- ✅ MongoDB no Docker
- ✅ README inicial com identidade visual
- ✅ .gitignore apropriado
- ✅ Primeiro commit criado
