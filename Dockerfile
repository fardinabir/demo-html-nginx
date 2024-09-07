FROM nginx:latest

WORKDIR /app

# Copy HTML files to the default Nginx web root
COPY . /app

# Copy custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
