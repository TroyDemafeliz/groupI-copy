import { ref, onMounted } from 'vue';
import api from '@/api';


export const Services = ref([])
export const currentService = ref()

export function setService(Service){
    currentService = Service
}

export function getServices() {
    api
    .get("/backend/Service/")
    .then((res) => res.data)
    .then((data) => {
        Services.value = data
        console.log(Services.value)
        console.log(data);
    })
    .catch((err) => alert(err));
}

export function createService(Title, Description, Image) {
    const formData = new FormData();
    formData.append('Title', Title);
    formData.append('Description', Description);
    formData.append('Image', Image);

    api
        .post("backend/Service/create/", formData)
        .then((res) => {
            if (res.status === 201) alert("Service created!");
            else alert("Failed to make Service.");
            getServices();
        })
        .catch((err) => alert(err));
}

export function updateService(id, Title, Description, Image) {
    api
    .put(`/backend/Service/update/${id}/`, {Title, Description, Image})
    .then((res) => {
        if (res.status === 200) alert("Service updated!");
        else alert("Failed to update Service.");
        getServices();
    })
    .catch((err) => alert(err));
}

export function deleteService(id) {
    api
    .delete(`/backend/Service/delete/${id}/`)
    .then((res) => {
        if (res.status === 204) alert("Service deleted!");
        else alert("Failed to delete Service.");
        getServices();
    })
    .catch((error) => alert(error));
}
export const useServices = () => {
    onMounted(getServices)
    return { Services, getServices, createService, updateService, deleteService, setService, currentService };
};