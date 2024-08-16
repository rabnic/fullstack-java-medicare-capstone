# Stage 1: Build the Angular app
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/medicare-app /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
