FROM ruby:2.2.0

RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /wsc
WORKDIR /wsc

ADD Gemfile /wsc/Gemfile
ADD Gemfile.lock /wsc/Gemfile.lock

RUN bundle install

ADD . /wsc
