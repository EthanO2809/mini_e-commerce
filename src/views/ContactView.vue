<template>
    <div class="contact">
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/mknlnopk" method="POST" class="row g-3 btm mb-0" target="_blank">
            <div class="col-12 column">
                <input type="name" class="form-control"  placeholder="Enter Your First Name" name="name" required  oninvalid="this.setCustomValidity('Please Enter Your First Name')"
                oninput="this.setCustomValidity('')">
            </div>
            <div class="col-12 column">
                <input type="name" class="form-control" placeholder="Enter You Last Name" name="name" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
                <div class="next">
                    <div class="col-6 l">
                      <input type="name" class="form-control" placeholder="Enter A Email" name="email" required  oninvalid="this.setCustomValidity('Please Enter Your Email')"
                      oninput="this.setCustomValidity('')">
                    </div>
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="Cell Number" name="number" required  oninvalid="this.setCustomValidity('Please Enter Your Contact Number')"
                      oninput="this.setCustomValidity('')">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Feedback" name="text"></textarea>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-primary">Clear</button>
            </div>
          </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1{
    padding-top: 20px;
    color: white;
    text-shadow:4px 4px grey;
}

.next {
    display: flex;
}

.l{
    margin-right: .1rem;
}

button{
    margin: 1rem;
    width: 5rem;
}

input{
    margin-bottom: 2rem;
}


form{
    margin-right: 10px;
    margin-left: 10px;
}
.contact{
    height: 80vh; 
    background-color: #676666;   
}

.btn {
    background-color: grey;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px dashed grey;
    box-shadow: grey 0px 2px 5px -1px, black 0px 1px 3px -1px;
    transition: .4s;
    width: 7rem;
    font-weight: bold;
   }
   
   .btn span:last-child {
    display: none;
   }
   
   .btn:hover {
    transition: .5s;
    border: 2px dashed grey;
    background-color: white;
    color: grey;
   }
   
   .btn:active {
    background-color: grey;
   }
   
.btn{
    margin-top: 4rem;
}

@media (max-width:800px) {
    .contact {
        height: max-content;
    }
}
</style>