const EMAIL_HTML_TEMPLATE = (id) => 
`
<div style="background:#eee">
<h1>Thank for Joining Lokali. please clicl the link below to enter Lokali</h1>
<a  href="http://localhost:3000/login?id=${id}">Click here to proccedd</a>
</div>   


`
module.exports = {
    EMAIL_HTML_TEMPLATE
}