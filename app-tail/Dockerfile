FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
# NOT SURE WHICH PORT. Probably 3000, 80 is for the client to access so that would be for head. but this is tail.
EXPOSE 3001 
# Start the app
CMD [ "yarn", "start-tail" ]