import { ref, onMounted } from 'vue';
import api from '@/api';


export const Projects = ref([])

export async function getProjects() {
    api
    .get("/backend/Project/")
    .then((res) => res.data)
    .then((data) => {
        Projects.value = data
        console.log(data);
    })
    .catch((err) => alert(err));
}

export async function createProject() {
    api
        .post("/backend/Project/create", { Title, Description, MainImage, SubImages })
        .then((res) => {
            if (res.status === 201) alert("Note created!");
            else alert("Failed to make note.");
            getProjects();
        })
        .catch((err) => alert(err));
}
export async function updateProject(id) {
    api
    .put(`/backend/Project/update/${id}/`, {id, Title, Description, MainImage, SubImages})
    .then((res) => {
        if (res.status === 200) alert("Project updated!");
        else alert("Failed to update note.");
        getProjects();
    })
    .catch((err) => alert(err));
}

export async function deleteProject(id) {
    api
    .delete(`/backend/Project/delete/${id}/`)
    .then((res) => {
        if (res.status === 204) alert("Project deleted!");
        else alert("Failed to delete Project.");
        getProjects();
    })
    .catch((error) => alert(error));
}
export const useProjects = () => {
    onMounted(getProjects);
    return { Projects, getProjects, createProject, updateProject, deleteProject };
};