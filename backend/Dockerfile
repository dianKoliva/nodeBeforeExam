FROM Node:12

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

# ENV PORT=8080

EXPOSE 4355

CMD [ "npm","start" ]