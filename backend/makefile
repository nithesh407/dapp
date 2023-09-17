all: migration_up

migration_up: migrate -path backend/database/migration/ -database "mysql://root:nithesh13631@tcp(localhost:3306)/dapp" -verbose up

migration_down: migrate -path backend/database/migration/ -database "mysql://root:nithesh13631@tcp(localhost:3306)/dapp" -verbose down

migration_fix: migrate -path backend/database/migration/ -database "mysql://root:nithesh13631@tcp(localhost:3306)/dapp" force VERSION