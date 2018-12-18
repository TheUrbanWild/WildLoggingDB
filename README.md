# WildLoggingDB - INCOMPLETE. NOT FOR PUBLIC USE (YET!)
After a merger, Restlet has changed its service terms. We need to remove our dependency on this service.

We will transfer our dependency to Heroku, running a Postgres DB.

Incidentally, this development has the potential for use of the geo searching capabilities of Postgres.

## Why are we doing this?

UrbanWild is the project we use to demonstrate how we put together prototypes quickly, as a team. 

Restlet Cloud is the PaaS which we have been using. It's service hosted a database, fronted by a REST API, which the Urban Wild SPWA used to store wildlife sightings.

Restlet was great as a platform for showing what RESTful interfaces are and how they work. 

Now we want to build on this experience, and show you how the RESTful API definition (using the Open API Specification ([which used to be Swagger](https://swagger.io/docs/specification/about/))) we built in Restlet Studio can be used to generate a skeleton server, and a database back-end, without too much more effort.

The result is much more useful, because we can add functionality which transforms the data, rather than just looking it up. Doing more processing on the server means that we reduce the communications traffic, and the processing done on the client.

## Plan

### Set up identity, tools and services

1. Create a project identity
1. Create a Restlet Account 
1. Create a Heroku account
1. Create an app with a postgres instance, on Heroku
1. Download and install the Omni DB database tool
1. Examine the Open API (Swagger) tools 

### Modify the API definition

1. Examine the Urban Wild REST interface definition using Restlet Studio, and Swagger
2. Remove all security definitions (for the time being)

### Construct a skeleton NodeJS server 

1. Use the Swagger tools to create a NodeJS server skeleton from the Urban Wild REST interface definition.
2. Run the server locally

### Create the database

1. Use the DB tool to create a database schema suitable to hold the UrbanWild data.

### Bind server to database

1. Hook-up the local NodeJS server to the remote Postgres database.
2. Implement the original functionality behind the interface
3. Debug the RESTful interface using the Visual Studio Code HTTP plugins.

### Deploy as a replacement service

1. Deploy the local NodeJS server to Heroku, from this GitHub repo
2. Change the location which the Urban Wild SPWA points to. Same interface, different location!

# Here we go

## Setting up a Project Identity

A project identity is very useful for keeping communications and accounts separate. 

We have set up a project alias on Alice's GMail account, and will use this mailbox identity to set-up any other accounts used by the project.

## Set-up RESTlet
We use Restlet Studio for building an and editing REST API definitions.

The Restlet API for urban wild is public.  
The original account is available [here](https://cloud.restlet.com/apis/25850/versions/1/overview)  
The REST API definition is [here](https://cloud.restlet.com/api/apis/25850/versions/1/swagger2?media=json), and copied to this repo [here](https://github.com/TheUrbanWild/WildLoggingDB/blob/master/documentation/restlet/swagger.yaml)  
Now we have the definition of the interface, to use in this project. Note: RESTlet's UI is the best for creating interfaces. Well worth getting an account and using it.

1. We created a RESTlet account for the porject identity

2. We imported the REST API definition into the Restlet Studio Tool, to take a look:



   ![here](/Users/coops/Documents/projects/WildLoggingDB/documentation/resources/restlet_api_def.png)


All is nicely laid-out, with end points for resources, verbs for the http operations, and defintions for the data which will be handled. 

The Restlet Studio UI is really good for visualising and building interface definitions, but once we're happy with them, we like to use the original swagger tools to validate them and construct skeleton servers.

## Swagger.io

Swagger.io originally developed the Open API Specification. We like to use its [open source tools](https://swagger.io/tools/open-source/) for development, because we think they are more definitive. 

1. We used the [online version](https://editor.swagger.io/) of the Swagger Editor to visualise [our]([here](https://github.com/TheUrbanWild/WildLoggingDB/blob/master/documentation/restlet/swagger.yaml) ) REST Interface definition.

   ![swagger](/Users/coops/Documents/projects/WildLoggingDB/documentation/resources/swagger_api_def.png)

The Swagger editor is much more code-orientated than Restlet Studio, which allows us to see much better how the interface is constructed - in [YAML](https://yaml.org/)

## Heroku

Heroku is a Platform-as-a-Service, which provides easy deployment of web applications and services from their source-code on GitHub. It has a generous free-tier model, which allows meaningful prototyping. It also has a thriving marketplace for third-party services, which provide similarly generous free-tier pricing. It's great for our purposes. 

The reason we like it so much, is that we remember how hard it used to be to deploy and secure a database backed web-service, and how much that got in the way of actual development. 

Security is a huge concern for anything that we do and to have such a trustable product at our disposal, essentially for free is a real benefit.

![heroku](/Users/coops/Documents/projects/WildLoggingDB/documentation/resources/heroku.png)

 Here's how we start-up our project with Heroku, and add a Postgres DB:

1. We created a Heroku account, using the project email address.
2. We used Heroku to create an app, using the European jurisdiction. (We called ours urbanwilddbapi
3. In Heroku, we used the 'Elements' menu item to add a free Heroku Postgres instance. (Hobby Dev)
4. In the app's Settings, the 'Reveal Config Vars' button shows we have a DATABASE_URL
5. The DATABASE_URL is a Postgres URL which points to the Postgres dabase instance on Amazon's AWS infrastructure.
6. The DATABASE URL is private, and should never be checked into a public repository, or allowed outside the project.
7. Heroku has a number of tools which can be used to create local instances of the Database - but for this exercise, we will just use the remote DB.

## Postgres tools
We need a Postgres client which is free, and usable from any of the Uni computers.

We're using [OmniDB](https://omnidb.org/index.php?option=com_content&view=category&layout=blog&id=12&Itemid=149&lang=en). 
This is a browser-based client. A web-based version is here: http://teampostgresql.herokuapp.com, or you can use [these instructions](https://github.com/AliceDigitalLabs/SupportingLiveProjects_2018/wiki/Additional-Tools-from-Github#omnidb) to set-up OmniBD on you H: drive. You can then use it on any CMDT PC.

![omnidb](/Users/coops/Documents/projects/WildLoggingDB/documentation/resources/omnidb.png)

In the pic above, OmniDB is directly editing our remote Postgres database (which is something done with **great caution!**)

That's the tools. Let's have a look at the API definition.

## API definition

### Authentication

We're going to remove all authentication from the interface for the time being - right now, the API and the data which it fronts will be open. In later exercises, we'll add authentication properly.

1. In RESTlet studio, change the attribution (name, contact details, etc) of the API.

2. Change the base URL to reflect the new Heroku app we created.

3. Remove the security schemes from the API

4. Export the YAML file

5. Check in the changes ()

