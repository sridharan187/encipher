function Admin(){
    const User = true;
    return (
        <>
        {User && <h2>inside User</h2>}
        </>
    )
}
export default Admin