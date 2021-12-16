# BID MASTERS

This project was created by Inês Cruz, Maria Farran Colell and Ricardo Nunes

## Description

Bid Masters is a platform used by Art Galleries to sell their art. There are constant auctions and the sellers can see a description and picture of the painting whilst betting on it. Artists can also use the site to directly sell their art without the need of a third party. 

### USER STORIES
### - Landing Page
The first thing seen by the user. Moving images and information about the cugrrent auctions. 
### - Payment 
The user can buy the artworks inputting their credit card number. 
### - Signup 
The user needs to sign up to buy the artwork. 
### - Preferred Access 
The user is a seller and needs preferred access. 
### - User information
Details about the user: surname, name, shipping address, billing address, what was last sold/bought, fiscal number.  
### - Logout
The user can log out. 
### - Edit/Delete the user information
The user can edit all the information given or delete his account. 
### - Auction Page
Page showing all the ongoing auctions
### - Future auctions
Page showing the detail of future auctions
### - 404 page
Showing the problem 
### - 500 page
Showing the problem
### - Countdown 
Countdown showing how long there is left on the auction


## Backlog:
### User Search 
The user will be able to search through our database information about the artworks. 
### Manish as an artist
Manish will be a featured artist and we'll display and sell some of his paintings.
### Maps
A map will show the precedence of the artwork.
### Chat
A chat will be implemented allowing the users to contact the auction houses.
### Calendar
The calendar will show all future auctions. 
### Private Sales
The individual sells the art. 
### Currency conversions
The price is shown in different currencies, including cryotocurrency. 
### Adding pieces
The users can add some of the artworks they own to sell them. 
### Artist
A different type of user that can upload images of his artwork to sell. 
### Adding sound
Adding a pleasant sound in the Landing page.

### CLIENT/FRONTEND
### Routes
Route path=/signin
Route path=/signup
Route path=/sellform" 
Route path=/
Route path=/auctiondetail/:artId
Route path=*
Route path=/user
Route path=/futureauctions
Route path=/closedauctions
Route path=/comingsoon
Route path=/contact
Route path=/theteam
Route path=/press
Route path=/user
Route path=/user/added/:user
Route path=/user/bid
Route path='/user/checkout
Route path=/user/added/edit/:artId
Route path=/privateauction
Route path=/pay

### Components
404notFound
AddArt
ArtBidded
ArtDetail
ArtListing
BidDrawer
ButtonAppBar
Calendar
Carousel
Chatbot
CheckoutForm
ClosedAuction
ComingSoon
Contact
EditArt
Footer
LottieCOntrol
Press
PrivateAuction
Profile
SignIn
SignInDialog
SignUp
SignUpDialog
Stripe
Team


### SERVER/BACKEND
### Models
Art
Bids
User

### API Endpoints / Backend Routes
auth
bidMasters
file-upload
index
stripe


### LINKS
<a href="https://whimsical.com/mobile-view-J5gdqV1f7wkniPMyEqm1JA">Whimsical</a>
### Kanban in Notion
<a href="https://www.notion.so/ffc6edaa56a24272a0f4945d98f1f5bf?v=362f6b85b58043c3aff127dd42d08c23">Notion</a>
### Git
<a href="https://github.com/cruzines/BM-client">Client side</a>
<a href="https://github.com/cruzines/BM-server">Server side</a>
### Slides
<a href="https://docs.google.com/presentation/d/1uFLaZnwqXLEqeTLtA0J6_2oLZGGKFlBSTEy8OUR6xNY/edit?usp=sharing">Google slides</a>


