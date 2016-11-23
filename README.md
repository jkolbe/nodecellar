Prerequisites
1. Install NodeJS => http://nodejs.org
2. Install MongoDB
	a) Download
		> curl http://downloads.mongodb.org/osx/mongodb-osx-x86_64-2.2.0.tgz > ~/Downloads/mongo.tgz
	b) Extract
		> cd ~/Downloads
		> tar -zxvf mongo.tgz
	c) Move to preferable location
		> sudo mv -n mongodb-osx-x86_64-2.2.0/ /usr/local/
	d) symbolic link
		> sudo ln -s /usr/local/mongodb-osx-x86_64-2.2.0 /usr/local/mongodb
	e) create folder with permissions
		> sudo mkdir -p /data/db
		> sudo chown `id -u` /data/db
	d) start MongoDB
		> cd /usr/local/mongodb
		> ./bin/mongod

3. Install MongoDB Driver for Node
	
	inside nodecellar folder
	> npm install mongodb
	




Creating a REST API using Node.js, Express, and MongoDB

1. Install Dependencies (Express)
	> npm install

2. Run server 
	> node server.js

3. Test results
	
	Get all the wines in the database:
		http://localhost:3000/wines
	
	Get wine with a specific id (for example: 1):
		http://localhost:3000/wines/1

