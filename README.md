## Running Locally

1. Install Docker for Mac:

    ```
    brew update
    brew cask install docker
    open /Applications/Docker.app
    ```
    For other Operating system, follow the instructions here, install both docker and docker-compose:
    [Docker for Linux](https://docs.docker.com/engine/installation/linux/) 
    [Docker Compose for Linux](https://docs.docker.com/compose/install/)

2. Verify that Docker is happy:

    ```
    docker ps
    ```
3. Start the site:

    ```
    docker-compose up -d
    ```
4. View the site:

    * For mac:

    ```
    open http://`docker port 2017writespeakcodecom_web_1 3000/tcp`
    ```

    * For Linux based system:

    ```
    xdg-open http://`docker port 2017writespeakcodecom_web_1 3000/tcp`
    ```
