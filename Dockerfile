#Build
FROM node:16.14.0 AS build
WORKDIR /targetr/Users/keithgrieshaber/projects/targetwe
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#Run
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY  --from=build /Users/keithgrieshaber/projects/target/targetrwe/dist/targetrwe /usr/share/nginx/html