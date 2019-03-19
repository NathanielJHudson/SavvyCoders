export default function(){
    return `
    <form action="https://formspree.io/ibn0721@gmail.com" method="POST">
            <label for="fname">First Name</label>
            <input type="text" id="fname" required>

            <label for="lname">Last Name</label>
            <input for="email">Email</input>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>

            <label for="phone">Phone</label>
            <input type="tel" name="phone" id="phone" required>

            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="comments"></textarea>

            <input type="submit" value="submit">
            <input type="reset" value="reset" required>

        </form>
    `;
}