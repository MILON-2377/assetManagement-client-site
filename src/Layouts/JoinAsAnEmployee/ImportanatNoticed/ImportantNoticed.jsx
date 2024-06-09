import useAuthProvider from "../../../Hooks/AuthProviderHooks/useAuthProvider";

const ImportantNoticed = () => {

    const {user} = useAuthProvider();

  return (
    <div className="homepage">
      <header>
        <div className="logo">MyApp</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/logout">Logout</a>
        </nav>
        
      </header>

      <main>
        {/* <h1>Welcome, {user.name}!</h1> */}

        <section className="pending-requests">
          <h2>My Pending Requests</h2>
          <div className="request-list">
            {/* {pendingRequests.map((request) => (
              <div className="request-card" key={request.id}>
                <h3>{request.title}</h3>
                <p>{new Date(request.date).toLocaleDateString()}</p>
                <p>Status: {request.status}</p>
              </div>
            ))} */}
          </div>
        </section>

        <section className="monthly-requests">
          <h2>My Monthly Requests</h2>
          <div className="request-list">
            {/* {monthlyRequests.map((request) => (
              <div className="request-card" key={request.id}>
                <h3>{request.title}</h3>
                <p>{new Date(request.date).toLocaleDateString()}</p>
                <p>Status: {request.status}</p>
              </div>
            ))} */}
          </div>
        </section>

        <section className="extra-sections">
          <div className="calendar">
            <h2>Calendar</h2>
            {/* Calendar component integration */}
          </div>

          <div className="events">
            <h2>Events</h2>
            <div className="event-list">
              {/* {events.map((event) => (
                <div className="event-card" key={event.id}>
                  <h3>{event.title}</h3>
                  <p>{new Date(event.date).toLocaleString()}</p>
                  <p>{event.description}</p>
                </div> */}
              {/* ))} */}
            </div>
          </div>

          <div className="notices">
            <h2>Notices</h2>
            <div className="notice-list">
              {/* {notices.map((notice) => (
                <div className="notice-card" key={notice.id}>
                  <h3>{notice.title}</h3>
                  <p>{new Date(notice.date).toLocaleDateString()}</p>
                  <p>{notice.description}</p>
                </div>
              ))} */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ImportantNoticed;
