# WildLoggingDB - INCOMPLETE. NOT FOR PUBLIC USE (YET!)
After a merger, Restlet has changed its service terms. We need to remove our dependency on this service.

We will transfer our dependency to Heroku, running a Postgres DB.

Incidentally, this development has the potential for use of the geo searching capabilities of Postgres.

## Plan
1. Export the Swagger interface description from the Restlet account.
1. Create a Heroku account for Alice
1. Create a local postgres instance
1. Find a useful, free Postgres DB tool.
1. Use the Restlet Account to help describe the Schema for the postgres DB, using the DB tool.
1. Create a NodeJS server skeleton from the Swagger interface description.
1. Hook-up the NodeJS server to the DB, locally
1. Debug the RESTful interface using the Visual Studio Code HTTP plugins
1. Create a Postgres instance on Heroku. Match the local DB to the Remote DB.
1. Deploy the local NodeJS server to Heroku.
1. Debug the RESTful interface using the Visual Studio Code HTTP plugins


## Postgres applications
Comprehensive list here [List](https://wiki.postgresql.org/wiki/PostgreSQL_Clients).
Trying out [this client](https://omnidb.org/index.php?option=com_content&view=category&layout=blog&id=12&Itemid=149&lang=en)
Web-based client, for use by students with restricted PCs: http://teampostgresql.herokuapp.com


## RESTlet
The Restlet API for urban wild is public.  
The account is available [here](https://cloud.restlet.com/apis/25850/versions/1/overview)  
The definition is [here](https://cloud.restlet.com/api/apis/25850/versions/1/swagger2?media=json)  
Transfered to this repo [here](https://github.com/TheUrbanWild/WildLoggingDB/blob/master/documentation/restlet/swagger.yaml)  
Now we have the definition of the interface, to use in this project. Note: RESTlet's UI is the best for creating interfaces. Well worth getting an account and using it.

## Create a Heroku Account for Alice
1. Create a mailbox for this purpose: alicedigitallabs+urbanwild@gmail.com
2. Create  Heroku account in this name: [account details here](https://github.com/CMDT/DigitalLabs_TeachingProjects/blob/master/docs/accounts/alice/accounts.md)

## Create a postgres instance on Heroku
1. Log into the Heroku account, and create a new Heroku App. For example: urbanwilddbapi. Make sure the App is in the EU jurisdiction (OR UK!!)
2. Add a Postgres Add-on to the App (They are free!)








