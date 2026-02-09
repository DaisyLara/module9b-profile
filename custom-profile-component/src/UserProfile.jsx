
function newComponent () {
    const user = "Gizmo";
    const bio = "A little cutie-patootie that deserves the world!"
    const profilePic = "https://static.wikia.nocookie.net/warner-bros-entertainment/images/1/14/Gizmo_Profile.png";

  return (
    <div style={{ width: '500px', height: '500px', margin: '40px auto', padding: '24px', borderRadius: '50%', backgroundColor: 'pink', fontFamily: 'Montserrat', textAlign: 'center' }}>
      <img src={profilePic} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #ffffff', }} />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#b7265e' }}>{user}</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bolder', color: '#b7265e' }} class="break">{bio}</p>
      <p style={{ fontSize: '20px', color: '#b7265e', textAlign: 'center' }}>The namesake for many dogs around the world (including mine, but referencing my own picture would have been more work).</p>
    </div>
  );
}

export default newComponent;