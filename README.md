## Running Locally

1. Install Docker for Mac:

    ```
    brew update
    brew cask install docker
    open /Applications/Docker.app
    ```
2. Verify that Docker is happy:

    ```
    docker ps
    ```
3. Start the site:

    ```
    docker-compose up -d
    ```
4. View the site:

    ```
    open http://`docker port 2017writespeakcodecom_web_1 3000/tcp`
    ```
