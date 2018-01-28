# AMAZON
#
# VERSION    1.0.0

FROM node
MAINTAINER 382229841@qq.com

ENV PORT 3000

COPY . /app  
WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]  