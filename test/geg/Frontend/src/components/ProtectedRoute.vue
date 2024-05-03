<script>
import { jwtDecode } from "jwt-decode";
import api from "@/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../token";
import { ref, watchEffect } from "vue";
import router from "@/router";

function ProtectedRoute({ children }) {
    const isAuthorized = ref(null)
    
    watchEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])
    const setIsAuthorized = (authorization) => {
        isAuthorized.value = authorization
    }
   
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/backend/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };
    auth()
    return isAuthorized.value ? children : router.push('/');
}

export default ProtectedRoute;

</script>