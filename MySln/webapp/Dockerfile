# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16.14.2 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/webapp /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD envsubst < /usr/share/nginx/html/configuration/config.prod.json > /usr/share/nginx/html/configuration/config.tmp.json && mv /usr/share/nginx/html/configuration/config.json /usr/share/nginx/html/configuration/config.dev.json && mv /usr/share/nginx/html/configuration/config.tmp.json /usr/share/nginx/html/configuration/config.json && nginx -g 'daemon off;'
