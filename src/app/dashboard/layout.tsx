import { ReactNode } from "react";

export default function dashboardLayout({ children }: { children: ReactNode }){
    return(
        <div>
            <nav style={{backgroundColor: 'darkcyan', padding: 10, color: 'white'}}>
                <h3>Fix Money</h3>
            </nav>
            <div
                style={{padding: 10}}
                >
                {children}
            </div>
        </div>
        
    )
}