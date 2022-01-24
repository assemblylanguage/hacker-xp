FROM alpine:3.15

RUN apk update
RUN apk add git
RUN apk add nodejs
RUN apk add npm
RUN git clone https://github.com/assemblylanguage/hacker-xp.git

WORKDIR /hacker-xp

RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
