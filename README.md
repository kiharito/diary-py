# diary-py

## Frontend

http://localhost:5173

ライブラリをインストールする
```shell
npm install
```

サーバーを起動する
```shell
npm run dev
```

## Backend

http://localhost:8000/docs

新しい仮想環境を作成する
```shell
python -m venv .venv
```

仮想環境をアクティベートする
```shell
source .venv/bin/activate
```

仮想環境を閉じる
```shell
deactivate
```

ライブラリをインストールする
```shell
poetry install --no-root
```

サーバーを起動する
```shell
uvicorn app.main:app --reload
```
