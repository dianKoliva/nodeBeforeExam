FROM Node:12

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

# ENV PORT=8080

EXPOSE 3000

CMD [ "npm","dev" ]