import React, {useEffect, useState} from "react";
import {apiClient} from "@app/components/apiClient.ts";
import {AxiosResponse} from "axios";
import {Patients} from "@app/components/Api.ts";


export const HomePage = () => {

    return (
        <div>
            <h1 className="menu-title text-5xl m-5">The Hospital App</h1>
        </div>
    );
}