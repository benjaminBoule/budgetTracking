import jwt_decode from "jwt-decode";

const withAuth = (WrappedComponent, roles) => {
  const Wrapper = props => {
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem('token')
      
      if (!token) {
        router.replace('/login')
        return;
      }

      try {
        const decodedToken = jwt_decode(token);

        if (!roles.includes(decodedToken.role)) {
          router.replace('/unauthorized')
          return;
        }
      } catch (err) {
        console.error("Error decoding token", err);
        router.replace('/login')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth