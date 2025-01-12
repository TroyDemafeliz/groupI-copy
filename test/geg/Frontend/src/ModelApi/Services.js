import { ref, onMounted } from 'vue';
import api from '@/api';


export const Services = ref([])
export const currentService = ref()

export async function getServices() {
    await api
    .get("/backend/Service/")
    .then((res) => res.data)
    .then((data) => {
        Services.value = data
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

export async function retrieveService(id){
    await api
    .get(`/backend/Service/update/${id}/`)
    .then((res) => res.data)
    .then((data) => {
        currentService.value = data
    })
    .catch((err) => alert(err));
}

export async function updateService(id, Title, Description, Image) {
    const formData = new FormData();
    formData.append('Title', Title);
    formData.append('Description', Description);
    if (Image) {
        formData.append('Image', Image);
    }

    await api
    .put(`/backend/Service/update/${id}/`, formData)
    .then((res) => {
        if (res.status === 200) alert("Service updated!");
        else alert("Failed to update Service.");
    })
    .catch((err) => alert(err));
}

export async function deleteService(id) {
    await api
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
    return { Services, getServices, createService, updateService, deleteService, retrieveService, currentService };
};

export const useService = (id) => {
    onMounted(retrieveService(id))
    return { Services, getServices, createService, updateService, deleteService, retrieveService, currentService };
};