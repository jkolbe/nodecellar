# Creating a REST API using Node.js, Express, and MongoDB

## Prerequisites
1. Install NodeJS => http://nodejs.org
2. Install MongoDB
.. * Download
	> curl http://downloads.mongodb.org/osx/mongodb-osx-x86_64-2.2.0.tgz > ~/Downloads/mongo.tgz
.. * Extract
	> cd ~/Downloads
	> tar -zxvf mongo.tgz
.. * Move to preferable location
	> sudo mv -n mongodb-osx-x86_64-2.2.0/ /usr/local/
.. *  symbolic link
	> sudo ln -s /usr/local/mongodb-osx-x86_64-2.2.0 /usr/local/mongodb
.. *  Create folder with permissions
	> sudo mkdir -p /data/db
	> sudo chown `id -u` /data/db
.. *  Start MongoDB
	> cd /usr/local/mongodb
	> ./bin/mongod

3. Install MongoDB Driver for Node
	
.. * Inside nodecellar folder
	> npm install mongodb



## How to run

1. Install Dependencies (Express)
	> npm install

2. Run server 
	> node server.js

3. Test results
	
	Get all the wines in the database:
		http://localhost:3000/wines
	
	Get wine with a specific id (for example: 1):
		http://localhost:3000/wines/1

