using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace AngularCrashCourse.html
{
    /// <summary>
    /// Summary description for webService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    //step 5: uncomment line below and add a js file
    [System.Web.Script.Services.ScriptService]
    public class webService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetEmployees()
        {
            //step 1: find the connectionString in connectionStrings.com SQL Server Standard Security (.NET)
            //step 2: in Web.confid, add connectionString
            //step 3: here
            List<EmployeeModel> listEmployee = new List<EmployeeModel>();

            var connectionString = ConfigurationManager.ConnectionStrings["AngularJSBasic"].ConnectionString;
            using(var connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("select * from Employees", connection);
                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                EmployeeModel employee;
                while(reader.Read())
                {
                    employee = new EmployeeModel();
                    employee.Id = Int32.Parse(reader["Id"].ToString());
                    employee.Name = reader["Name"].ToString();
                    employee.Gender = reader["Gender"].ToString();
                    employee.Salary = Int32.Parse(reader["Salary"].ToString());
                    employee.BirthDay = DateTime.Parse(reader["Birthday"].ToString());
                    listEmployee.Add(employee);
                }

                //step 4: serialize to JS
                JavaScriptSerializer jsSerivalizer = new JavaScriptSerializer();
                Context.Response.Write(jsSerivalizer.Serialize(listEmployee));
            }

        }
    }
}
