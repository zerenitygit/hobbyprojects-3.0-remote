// Input validators for various textfields are not included due to scope of project

package GymManagementSystem.src.package1;

import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import java.util.ArrayList;
import javax.swing.*;
import javax.swing.table.*;


public class MyClass {
    public static void main(String[] args) throws Exception {

        new LoginScreen();

    }

}


class LoginScreen extends JFrame implements ActionListener, MouseListener, KeyListener {

    JPanel panel;
    private JLabel backgroundimage;
    private ImageIcon wallpaper;
    private JLabel usernamelabel;
    private JLabel passwordlabel;
    private JTextField usernametextfield;
    private JPasswordField passwordtextfield;

    private JLabel errormessage;
    private JLabel submitbutton;

    LoginScreen() {

        wallpaper = new ImageIcon((this.getClass().getResource("/GymManagementSystem/src/gym.jpeg")));
        ImageIcon arrow = new ImageIcon(this.getClass().getResource("/GymManagementSystem/src/arrow.png"));

        Image getarrow = arrow.getImage();
        Image scaledarrow = getarrow.getScaledInstance(60, 60, Image.SCALE_SMOOTH);
        ImageIcon arrowscaleicon = new ImageIcon(scaledarrow);

        this.setSize(1400, 900);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);
        this.setResizable(false);

        panel = new JPanel();
        panel.setBounds(0, 0, 1400, 900);
        panel.setLayout(null);
        panel.setBackground(Color.red);

        backgroundimage = new JLabel();
        backgroundimage.setIcon(wallpaper);
        backgroundimage.setBounds(0, 0, 1400, 900);

        usernamelabel = new JLabel("Username");
        usernamelabel.setForeground(Color.WHITE);
        usernamelabel.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 25));
        usernamelabel.setBounds(410, 277, 200, 100);

        usernametextfield = new JTextField();
        usernametextfield.setBounds(570, 300, 340, 50);
        usernametextfield.setFont(new Font("Calibri", Font.PLAIN, 25));
        usernametextfield.addActionListener(this);
        usernametextfield.addKeyListener(this);

        passwordlabel = new JLabel("Password");
        passwordlabel.setForeground(Color.WHITE);
        passwordlabel.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 25));
        passwordlabel.setBounds(410, 477, 200, 100);

        passwordtextfield = new JPasswordField();
        passwordtextfield.setBounds(570, 500, 340, 50);
        passwordtextfield.setFont(new Font("Calibri", Font.PLAIN, 25));
        passwordtextfield.addActionListener(this);
        passwordtextfield.addKeyListener(this);

        JLabel title = new JLabel("Gym Management System");
        title.setForeground(Color.white);
        title.setBounds(536, 110, 500, 100);
        title.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 38));
        
        errormessage = new JLabel("");
        errormessage.setBounds(530, 666, 400, 100);
        errormessage.setForeground(Color.WHITE);
        errormessage.setFont(new Font("Calibri", Font.ITALIC, 22));

        submitbutton = new JLabel();
        submitbutton.setBounds(835, 650, 73, 70);
        submitbutton.setIcon(arrowscaleicon);
        submitbutton.setLayout(new BorderLayout());
        submitbutton.setHorizontalAlignment(JLabel.CENTER);
        submitbutton.setVerticalAlignment(JLabel.CENTER);
        submitbutton.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));

        submitbutton.setOpaque(true);
        submitbutton.addMouseListener(this);

        panel.add(submitbutton);
        panel.add(errormessage);
        panel.add(title);
        panel.add(passwordtextfield);
        panel.add(passwordlabel);
        panel.add(usernametextfield);
        panel.add(usernamelabel);
        panel.add(backgroundimage);

        this.add(panel);


        this.setVisible(true);

    }


    @Override
    public void actionPerformed(ActionEvent e) {


    }

    @Override
    public void mouseClicked(MouseEvent e) {
        if (e.getSource() == submitbutton) {

            String username = usernametextfield.getText();
            String password = passwordtextfield.getText(); // Would ideally use getPassword() in more serious projects. 

            boolean report = SQLclass.establishConnection(username, password);

            if (report == true) {

                errormessage.setText("");
                ProgressCounter progresscounter = new ProgressCounter(this);
                progresscounter.start();

            } else if (report == false) {
                errormessage.setText("Wrong Password or Username");

            }

        }

    }


    @Override
    public void mousePressed(MouseEvent e) {
        // TODO Auto-generated method stub

    }


    @Override
    public void mouseReleased(MouseEvent e) {
        // TODO Auto-generated method stub

    }


    @Override
    public void mouseEntered(MouseEvent e) {
        // TODO Auto-generated method stub

    }


    @Override
    public void mouseExited(MouseEvent e) {
        // TODO Auto-generated method stub

    }


    @Override
    public void keyTyped(KeyEvent e) {
        // TODO Auto-generated method stub

    }


    @Override
    public void keyPressed(KeyEvent e) {
        // TODO Auto-generated method stub
        if (e.getSource() == usernametextfield) {
            errormessage.setText("");

        } else if (e.getSource() == passwordtextfield) {
            errormessage.setText("");

        }

    }

    @Override
    public void keyReleased(KeyEvent e) {
        // TODO Auto-generated method stub

    }

}


class ProgressCounter extends Thread {

    JProgressBar progressBar;
    LoginScreen loginscreen;

    ProgressCounter(LoginScreen loginscreen) {
        this.loginscreen = loginscreen;
        JPanel loadingpanel = new JPanel();
        loadingpanel.setBounds(0, 0, 1400, 900);

        progressBar = new JProgressBar();
        progressBar.setBounds(0, 765, 1400, 100);
        progressBar.setStringPainted(true);
        progressBar.setForeground(new Color(18, 165, 18));
        progressBar.setValue(0);
        progressBar.setVisible(true);
        progressBar.setBackground(Color.white);

        loginscreen.panel.add(progressBar);

    }

    @Override
    public void run() {
        int counter = 0;

        while (counter < 100) {
            progressBar.setValue(counter);
            try {
                Thread.sleep(18);
            } catch (InterruptedException e) {

                e.printStackTrace();
            }
            counter += 1;
        }

        if (counter == 100) {

            new Home();
            loginscreen.dispose();

        }

    }
}


class SQLclass {
    static Connection connection;
    static String inserterrormessage;

    static String[] arrayofids;
    static String[] arrayoffirstnames;
    static String[] arrayoflastnames;
    static String[] arrayofdateofbirths;
    static String[] arrayofemails;
    static String[] arrayofstreetaddresses;
    static String[] arrayofmemberssince;

    static boolean establishConnection(String username, String password) {
        boolean conncectionresult = true;

        String url = "jdbc:mysql://localhost:3306/nameofdb"; //replace "nameofdb" with your db name, db table schema used with this code available in seperate file (in this packege's readme file). table in your db needs to be named "Customers"
       
        try {

            connection = DriverManager.getConnection(url, username, password);

        } catch (Exception e) {

            conncectionresult = false;
        }

        return conncectionresult;
    }

    static boolean insertstatement(String firstnamevalue, String lastnamevalue, String dateofbirthvalue, String emailvalue, String streetaddressvalue, String membersincevalue) {

        boolean result = true;

        try {
            String query = "insert into Customers (firstName, LastName, dateOfBirth, email, streetAddress, memberSince) values (" + "\"" + firstnamevalue + "\"" + ", " + "\"" + lastnamevalue + "\"" + ", " + "\"" + dateofbirthvalue + "\"" + ", " + "\"" + emailvalue + "\"" + ", " + "\"" + streetaddressvalue + "\"" + ", " + "\"" + membersincevalue + "\"" + ");";

            Statement stmt = connection.createStatement();
            stmt.executeUpdate(query);

        } catch (Exception e) {

            inserterrormessage = e.toString();
            result = false;
        }

        return result;

    }

    static String[][] viewstatement() {

        ArrayList < String > idarraylist = new ArrayList < String > ();
        ArrayList < String > firstnamesarraylist = new ArrayList < String > ();
        ArrayList < String > lastnamearraylist = new ArrayList < String > ();
        ArrayList < String > dateofbirtharraylist = new ArrayList < String > ();
        ArrayList < String > emailarraylist = new ArrayList < String > ();
        ArrayList < String > streetaddressarraylist = new ArrayList < String > ();
        ArrayList < String > membersincearraylist = new ArrayList < String > ();

        try {

            String query = "select * from Customers";

            Statement stmt = connection.createStatement();

            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {

                idarraylist.add(rs.getString(1));
                firstnamesarraylist.add(rs.getString(2));
                lastnamearraylist.add(rs.getString(3));
                dateofbirtharraylist.add(rs.getString(4));
                emailarraylist.add(rs.getString(5));
                streetaddressarraylist.add(rs.getString(6));
                membersincearraylist.add(rs.getString(7));

            }

        } catch (Exception e) {

        }

        String[] arrayofids = idarraylist.toArray(new String[0]);
        String[] arrayoffirstnames = firstnamesarraylist.toArray(new String[0]);
        String[] arrayoflastnames = lastnamearraylist.toArray(new String[0]);
        String[] arrayofdateofbirths = dateofbirtharraylist.toArray(new String[0]);
        String[] arrayofemails = emailarraylist.toArray(new String[0]);
        String[] arrayofstreetaddresses = streetaddressarraylist.toArray(new String[0]);
        String[] arrayofmemberssince = membersincearraylist.toArray(new String[0]);

        int arrayLength = arrayofids.length;

        String data[][] = new String[arrayLength][7];

        for (int i = 0; i < arrayLength; i++) {
            data[i][0] = arrayofids[i];
            data[i][1] = arrayoffirstnames[i];
            data[i][2] = arrayoflastnames[i];
            data[i][3] = arrayofdateofbirths[i];
            data[i][4] = arrayofemails[i];
            data[i][5] = arrayofstreetaddresses[i];
            data[i][6] = arrayofmemberssince[i];
        }

        for (int i = 0; i < arrayLength; i++) {
            for (int j = 0; j < 7; j++) {

            }
        }

        return data;

    }


    static int updatestatement(String curremail, String set, String to) {

        int rows = 0;

        try {
            String query = "update Customers set " + set + " = " + "\"" + to + "\"" + " where email = " + "\"" + curremail + "\"" + ";";

            Statement stmt = connection.createStatement();

            rows = stmt.executeUpdate(query);

        } catch (Exception e) {

        }

        return rows;
    }

    static int removecustomer(String removingcustomeremail) {
        int rows = 0;
        try {
            String query = "delete from Customers where email =" + "\"" + removingcustomeremail + "\"" + ";";
            Statement stmt = connection.createStatement();
            rows = stmt.executeUpdate(query);

            stmt.executeUpdate(query);
        } catch (Exception e) {

        }

        return rows;
    }

    static String getinserterrormessage() {
        return inserterrormessage;
    }

    static void closeconntion() {
        try {
            connection.close();
        } catch (SQLException e) {

            e.printStackTrace();
        }

    }

}


class Home implements ActionListener {
   
    JButton createcustomer;
    JButton viewcustomers;
    JButton removecustomers;

    JPanel panel;

    JLabel firstname;
    JLabel lastname;
    JLabel dateofbirth;
    JLabel email;
    JLabel streetaddress;
    JLabel membersince;

    JTextField firstnamefield;
    JTextField lastnamefield;
    JTextField emailfield;
    JTextField dateofbirthfield;
    JTextField membersincefield;
    JTextField streetaddressfield;
    JButton createmember;
    JButton gohome;
    JLabel successfulcreatecustomer;
    JLabel imagecontainer;

    JPanel viewpanel;
    JTable table;

    JButton viewcustomersgobackbutton;
    JScrollPane jps;

    JButton exitapplication;
    JButton updatecustomer;

    JButton updatefirstname;
    JButton updatelastname;
    JButton updatedateofbirth;
    JButton updateemail;
    JButton updatestreetaddress;
    JButton updatecustomergohome;

    JLabel to;
    JTextField tofield;
    JLabel currentregisteredemaillabel;
    JTextField currentregisteredemailfield;
    JButton gobacklastupdateslide;
    JButton updatesubmit;
    JLabel updatesuccessstatus;
    String switchvariable;

    JLabel deletetext;
    JTextField deletefield;
    JButton deletebutton;
    JButton gobackfromdeletemenu;
    JLabel deletesuccessstatus;


    Home() {
        ImageIcon leftarrow = new ImageIcon(this.getClass().getResource("/GymManagementSystem/src/leftarrow.png"));
        ImageIcon wallpaper = new ImageIcon(this.getClass().getResource("/GymManagementSystem/src/gymwallpaper.jpg"));

        Image getarrow = leftarrow.getImage();
        Image scaledarrow = getarrow.getScaledInstance(40, 30, Image.SCALE_SMOOTH);
        ImageIcon arrowscaleicon = new ImageIcon(scaledarrow);

        JFrame frame = new JFrame();
        frame.setResizable(false);
        frame.setSize(1000, 700);
        frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        frame.setLayout(null);

        panel = new JPanel();
        panel.setBounds(0, 0, 1000, 700);

        panel.setLayout(null);

        createcustomer = new JButton("Create New Customer");
        createcustomer.setBounds(420, 84, 180, 60);
        createcustomer.setFocusable(false);
        createcustomer.addActionListener(this);
        createcustomer.setBackground(new Color(242, 242, 242));

        updatecustomer = new JButton("Update A Customer");
        updatecustomer.setBounds(420, 200, 180, 60);
        updatecustomer.setFocusable(false);
        updatecustomer.addActionListener(this);
        updatecustomer.setBackground(new Color(210, 255, 224));

        viewcustomers = new JButton("View Customers");
        viewcustomers.setBounds(420, 320, 180, 60);
        viewcustomers.setFocusable(false);
        viewcustomers.addActionListener(this);
        viewcustomers.setBackground(new Color(255, 210, 210));

        removecustomers = new JButton("Remove Customer");
        removecustomers.setBounds(420, 440, 180, 60);
        removecustomers.setFocusable(false);
        removecustomers.addActionListener(this);
        removecustomers.setBackground(new Color(210, 237, 255));

        exitapplication = new JButton("Exit Application");
        exitapplication.setBounds(447, 560, 130, 40);
        exitapplication.setFocusable(false);
        exitapplication.addActionListener(this);
        exitapplication.setBackground(new Color(255, 220, 204));

        firstname = new JLabel("Firstname:");
        firstname.setBounds(280, 135, 200, 50);
        firstname.setVisible(false);
        firstname.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 16));
        firstname.setForeground(Color.white);

        lastname = new JLabel("Lastname:");
        lastname.setBounds(280, 185, 200, 50);
        lastname.setVisible(false);
        lastname.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 16));
        lastname.setForeground(Color.white);

        dateofbirth = new JLabel("Date of Birth YYYY-MM-DD:");
        dateofbirth.setBounds(280, 235, 300, 50);
        dateofbirth.setVisible(false);
        dateofbirth.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 16));
        dateofbirth.setForeground(Color.white);

        email = new JLabel("Email:");
        email.setBounds(280, 285, 200, 50);
        email.setVisible(false);
        email.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 16));
        email.setForeground(Color.white);

        streetaddress = new JLabel("Street Address:");
        streetaddress.setBounds(280, 335, 200, 50);
        streetaddress.setVisible(false);
        streetaddress.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 16));
        streetaddress.setForeground(Color.white);

        membersince = new JLabel("Member Since YYYY-MM-DD:");
        membersince.setBounds(280, 385, 300, 50);
        membersince.setVisible(false);
        membersince.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 16));
        membersince.setForeground(Color.white);

        firstnamefield = new JTextField();
        firstnamefield.setBounds(520, 140, 200, 30);
        firstnamefield.setVisible(false);
        firstnamefield.addActionListener(this);

        lastnamefield = new JTextField();
        lastnamefield.setBounds(520, 185, 200, 30);
        lastnamefield.setVisible(false);
        lastnamefield.addActionListener(this);

        dateofbirthfield = new JTextField();
        dateofbirthfield.setBounds(520, 240, 200, 30);
        dateofbirthfield.setVisible(false);
        dateofbirthfield.addActionListener(this);

        emailfield = new JTextField();
        emailfield.setBounds(520, 290, 200, 30);
        emailfield.setVisible(false);
        emailfield.addActionListener(this);

        streetaddressfield = new JTextField();
        streetaddressfield.setBounds(520, 340, 200, 30);
        streetaddressfield.setVisible(false);
        streetaddressfield.addActionListener(this);

        membersincefield = new JTextField();
        membersincefield.setBounds(520, 390, 200, 30);
        membersincefield.setVisible(false);
        membersincefield.addActionListener(this);

        createmember = new JButton("Create Member");
        createmember.setBounds(420, 500, 150, 40);
        createmember.addActionListener(this);
        createmember.setFocusable(false);
        createmember.setVisible(false);

        successfulcreatecustomer = new JLabel("");
        successfulcreatecustomer.setForeground(Color.white);

        gohome = new JButton("Go Back Home");
        gohome.setIcon(arrowscaleicon);
        gohome.setBounds(382, 560, 220, 40);
        gohome.setVisible(false);

        gohome.addActionListener(this);

        imagecontainer = new JLabel();
        imagecontainer.setBounds(0, 0, 1000, 700);
        imagecontainer.setIcon(wallpaper);
        imagecontainer.setVisible(true);

        viewpanel = new JPanel();
        viewpanel.setBounds(0, 0, 1000, 700);
        viewpanel.setVisible(false);

        viewcustomersgobackbutton = new JButton("Go Back Home");
        viewcustomersgobackbutton.setIcon(arrowscaleicon);
        viewcustomersgobackbutton.setPreferredSize(new Dimension(80, 80));
        viewcustomersgobackbutton.setVisible(false);
        viewcustomersgobackbutton.setVerticalAlignment(SwingConstants.TOP);
        viewcustomersgobackbutton.addActionListener(this);

        updatefirstname = new JButton("Update First Name");
        updatefirstname.addActionListener(this);
        updatefirstname.setBounds(390, 70, 250, 50);
        updatefirstname.setVisible(false);
        updatefirstname.setFocusable(false);

        updatelastname = new JButton("Update Last Name");
        updatelastname.addActionListener(this);
        updatelastname.setBounds(390, 170, 250, 50);
        updatelastname.setVisible(false);
        updatelastname.setFocusable(false);

        updatedateofbirth = new JButton("Update Date of Birth");
        updatedateofbirth.addActionListener(this);
        updatedateofbirth.setBounds(390, 270, 250, 50);
        updatedateofbirth.setVisible(false);
        updatedateofbirth.setFocusable(false);

        updateemail = new JButton("Update Email");
        updateemail.addActionListener(this);
        updateemail.setBounds(390, 370, 250, 50);
        updateemail.setVisible(false);
        updateemail.setFocusable(false);

        updatestreetaddress = new JButton("Update Street Address");
        updatestreetaddress.addActionListener(this);
        updatestreetaddress.setBounds(390, 470, 250, 50);
        updatestreetaddress.setVisible(false);
        updatestreetaddress.setFocusable(false);

        updatecustomergohome = new JButton("Go Home");
        updatecustomergohome.addActionListener(this);
        updatecustomergohome.setBounds(441, 570, 150, 50);
        updatecustomergohome.setVisible(false);
        updatecustomergohome.setIcon(arrowscaleicon);
        updatecustomergohome.setFocusable(false);

        to = new JLabel("To:");
        to.setBounds(220, 290, 170, 30);
        to.setVisible(false);
        to.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 18));
        to.setForeground(Color.white);

        tofield = new JTextField();
        tofield.setBounds(220, 320, 170, 30);
        tofield.setVisible(false);

        currentregisteredemaillabel = new JLabel("Current Registered Email:");
        currentregisteredemaillabel.setBounds(583, 290, 250, 30);
        currentregisteredemaillabel.setVisible(false);
        currentregisteredemaillabel.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 18));
        currentregisteredemaillabel.setForeground(Color.white);

        currentregisteredemailfield = new JTextField();
        currentregisteredemailfield.setBounds(584, 320, 200, 30);
        currentregisteredemailfield.setVisible(false);

        gobacklastupdateslide = new JButton("Go Back");
        gobacklastupdateslide.setBounds(400, 600, 200, 40);
        gobacklastupdateslide.setVisible(false);
        gobacklastupdateslide.addActionListener(this);
        gobacklastupdateslide.setIcon(arrowscaleicon);

        updatesubmit = new JButton("Update");
        updatesubmit.setBounds(440, 410, 100, 40);
        updatesubmit.setVisible(false);
        updatesubmit.addActionListener(this);

        updatesuccessstatus = new JLabel("");
        updatesuccessstatus.setBounds(405, 495, 500, 40);
        updatesuccessstatus.setForeground(Color.white);
        updatesuccessstatus.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 26));

        deletetext = new JLabel("Delete Customer With Email:");
        deletetext.setVisible(false);
        deletetext.setBounds(300, 250, 300, 50);
        deletetext.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 18));
        deletetext.setForeground(Color.white);

        deletefield = new JTextField();
        deletefield.setVisible(false);
        deletefield.setBounds(300, 300, 270, 30);
        deletefield.addActionListener(this);

        deletebutton = new JButton("Delete Customer");
        deletebutton.setVisible(false);
        deletebutton.setBounds(620, 300, 150, 30);
        deletebutton.addActionListener(this);

        gobackfromdeletemenu = new JButton("Go Back");
        gobackfromdeletemenu.setVisible(false);
        gobackfromdeletemenu.setBounds(450, 400, 150, 40);
        gobackfromdeletemenu.addActionListener(this);
        gobackfromdeletemenu.setIcon(arrowscaleicon);

        deletesuccessstatus = new JLabel("");
        deletesuccessstatus.setBounds(432, 455, 200, 100);
        deletesuccessstatus.setForeground(Color.white);
        deletesuccessstatus.setFont(new Font("Calibri", Font.ROMAN_BASELINE, 26));
        deletesuccessstatus.setVisible(false);

        panel.add(deletetext);
        panel.add(deletefield);
        panel.add(deletebutton);
        panel.add(gobackfromdeletemenu);
        panel.add(deletesuccessstatus);

        panel.add(updatesubmit);
        panel.add(updatesuccessstatus);

        panel.add(to);

        panel.add(tofield);
        panel.add(currentregisteredemaillabel);
        panel.add(currentregisteredemailfield);

        panel.add(updatecustomergohome);
        panel.add(updatefirstname);
        panel.add(updatelastname);
        panel.add(updatedateofbirth);
        panel.add(updateemail);
        panel.add(updatestreetaddress);

        panel.add(updatecustomer);
        panel.add(exitapplication);

        panel.add(gohome);
        panel.add(successfulcreatecustomer);
        panel.add(createmember);

        panel.add(firstnamefield);
        panel.add(lastnamefield);
        panel.add(dateofbirthfield);
        panel.add(emailfield);
        panel.add(membersincefield);
        panel.add(streetaddressfield);

        panel.add(firstname);
        panel.add(lastname);
        panel.add(dateofbirth);
        panel.add(email);
        panel.add(streetaddress);
        panel.add(membersince);

        panel.add(createcustomer);
        panel.add(viewcustomers);
        panel.add(removecustomers);
        panel.add(gobacklastupdateslide);
        panel.add(imagecontainer);

        frame.add(panel);

        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == createcustomer) {
           
            createcustomer.setVisible(false);
            viewcustomers.setVisible(false);
            removecustomers.setVisible(false);
            exitapplication.setVisible(false);
            updatecustomer.setVisible(false);

            firstname.setVisible(true);
            lastname.setVisible(true);
            dateofbirth.setVisible(true);
            streetaddress.setVisible(true);
            email.setVisible(true);
            membersince.setVisible(true);

            firstnamefield.setVisible(true);
            lastnamefield.setVisible(true);
            dateofbirthfield.setVisible(true);
            membersincefield.setVisible(true);
            streetaddressfield.setVisible(true);
            emailfield.setVisible(true);

            createmember.setVisible(true);
            gohome.setVisible(true);

        } else if (e.getSource() == updatecustomer) {
           
            updatefirstname.setVisible(true);
            updatelastname.setVisible(true);
            updatedateofbirth.setVisible(true);
            updateemail.setVisible(true);
            updatestreetaddress.setVisible(true);
            updatecustomergohome.setVisible(true);


            createcustomer.setVisible(false);
            viewcustomers.setVisible(false);
            removecustomers.setVisible(false);
            exitapplication.setVisible(false);
            updatecustomer.setVisible(false);

            deletesuccessstatus.setVisible(false);

        } else if (e.getSource() == viewcustomers) {
           
            removecustomers.setVisible(false);
            createcustomer.setVisible(false);
            viewcustomers.setVisible(false);
            exitapplication.setVisible(false);

            updatecustomer.setVisible(false);
            imagecontainer.setVisible(false);

            panel.setLayout(new BorderLayout());

            String[][] data = SQLclass.viewstatement();

            String[] columns = {
                "id",
                "firstname",
                "lastname",
                "dateofbirth",
                "email",
                "streetaddress",
                "membersince"
            };

            table = new JTable(data, columns) {
                public Component prepareRenderer(TableCellRenderer r, int data, int columns) {
                    Component c = super.prepareRenderer(r, data, columns);

                    if (data % 2 == 0) {
                        c.setBackground(Color.WHITE);


                    } else {
                        c.setBackground(Color.lightGray);
                    }

                    if (isCellSelected(data, columns)) {
                        c.setBackground(Color.GREEN);
                    }

                    return c;
                };
            };

            table.setPreferredScrollableViewportSize(new Dimension(750, 600));
            table.setFillsViewportHeight(true);

            table.setOpaque(true);

            jps = new JScrollPane(table);
            panel.add(jps, BorderLayout.NORTH);
            panel.add(viewcustomersgobackbutton, BorderLayout.SOUTH);

            jps.setVisible(true);
            viewcustomersgobackbutton.setVisible(true);

        } else if (e.getSource() == removecustomers) {
           
            removecustomers.setVisible(false);
            updatecustomer.setVisible(false);
            createcustomer.setVisible(false);
            viewcustomers.setVisible(false);
            exitapplication.setVisible(false);

            deletebutton.setVisible(true);
            deletefield.setVisible(true);
            deletetext.setVisible(true);

            gobackfromdeletemenu.setVisible(true);

        } else if (e.getSource() == exitapplication) {
            SQLclass.closeconntion();
            System.exit(0);
        }


        if (e.getSource() == createmember) {

            String firstnamevalue = firstnamefield.getText();
            String lastnamevalue = lastnamefield.getText();
            String emailvalue = emailfield.getText();
            String dateofbirthvalue = dateofbirthfield.getText();
            String membersincevalue = membersincefield.getText();
            String streetaddressvalue = streetaddressfield.getText();

            successfulcreatecustomer.setVisible(true);

            firstnamefield.setText("");
            lastnamefield.setText("");
            emailfield.setText("");
            streetaddressfield.setText("");
            dateofbirthfield.setText("");
            membersincefield.setText("");

            boolean queryresult = SQLclass.insertstatement(firstnamevalue, lastnamevalue, dateofbirthvalue, emailvalue, streetaddressvalue, membersincevalue);

            if (queryresult == true) {

                successfulcreatecustomer.setText("Customer Created");
                successfulcreatecustomer.setFont(new Font("Calibri", Font.BOLD, 22));
                successfulcreatecustomer.setBounds(410, 450, 200, 40);

            } else if (queryresult == false) {
              
                successfulcreatecustomer.setText(SQLclass.getinserterrormessage());
                successfulcreatecustomer.setBounds(50, 385, 900, 150);
                successfulcreatecustomer.setFont(new Font("Calibri", Font.BOLD, 16));
            }

        } else if (e.getSource() == gohome) {
            
            firstname.setVisible(false);
            lastname.setVisible(false);
            dateofbirth.setVisible(false);
            streetaddress.setVisible(false);
            email.setVisible(false);
            membersince.setVisible(false);

            firstnamefield.setVisible(false);
            lastnamefield.setVisible(false);
            dateofbirthfield.setVisible(false);
            membersincefield.setVisible(false);
            streetaddressfield.setVisible(false);
            emailfield.setVisible(false);

            createmember.setVisible(false);
            gohome.setVisible(false);
            successfulcreatecustomer.setVisible(false);

            createcustomer.setVisible(true);
            viewcustomers.setVisible(true);
            removecustomers.setVisible(true);
            exitapplication.setVisible(true);
            updatecustomer.setVisible(true);

            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);

        } else if (e.getSource() == viewcustomersgobackbutton) {
           
            jps.setVisible(false);
            viewcustomersgobackbutton.setVisible(false);
            panel.setLayout(null);

            imagecontainer.setVisible(true);

            createcustomer.setVisible(true);
            viewcustomers.setVisible(true);
            removecustomers.setVisible(true);
            exitapplication.setVisible(true);
            updatecustomer.setVisible(true);

            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);

        } else if (e.getSource() == updatecustomergohome) {
          
            createcustomer.setVisible(true);
            viewcustomers.setVisible(true);
            removecustomers.setVisible(true);
            exitapplication.setVisible(true);
            updatecustomer.setVisible(true);

            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);
            updatecustomergohome.setVisible(false);
        }

        if (e.getSource() == updatefirstname) {
          
            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);
            updatecustomergohome.setVisible(false);

            to.setVisible(true);

            tofield.setVisible(true);

            currentregisteredemaillabel.setVisible(true);
            currentregisteredemailfield.setVisible(true);

            gobacklastupdateslide.setVisible(true);
            updatesubmit.setVisible(true);

            switchvariable = "firstName";



        } else if (e.getSource() == updatelastname) {
          
            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);
            updatecustomergohome.setVisible(false);

            to.setVisible(true);

            tofield.setVisible(true);

            currentregisteredemaillabel.setVisible(true);
            currentregisteredemailfield.setVisible(true);
            gobacklastupdateslide.setVisible(true);
            updatesubmit.setVisible(true);

            switchvariable = "lastName";



        } else if (e.getSource() == updatedateofbirth) {
           
            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);
            updatecustomergohome.setVisible(false);

            to.setVisible(true);

            tofield.setVisible(true);

            currentregisteredemaillabel.setVisible(true);
            currentregisteredemailfield.setVisible(true);
            gobacklastupdateslide.setVisible(true);
            updatesubmit.setVisible(true);

            switchvariable = "dateOfBirth";


        } else if (e.getSource() == updateemail) {
          
            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);
            updatecustomergohome.setVisible(false);

            to.setVisible(true);

            tofield.setVisible(true);

            currentregisteredemaillabel.setVisible(true);
            currentregisteredemailfield.setVisible(true);
            gobacklastupdateslide.setVisible(true);
            updatesubmit.setVisible(true);

            switchvariable = "email";


        } else if (e.getSource() == updatestreetaddress) {
         
            updatefirstname.setVisible(false);
            updatelastname.setVisible(false);
            updatedateofbirth.setVisible(false);
            updateemail.setVisible(false);
            updatestreetaddress.setVisible(false);
            updatecustomergohome.setVisible(false);

            to.setVisible(true);

            tofield.setVisible(true);

            currentregisteredemaillabel.setVisible(true);
            currentregisteredemailfield.setVisible(true);
            gobacklastupdateslide.setVisible(true);
            updatesubmit.setVisible(true);
            switchvariable = "streetAddress";


        }

        if (e.getSource() == gobacklastupdateslide) {
           
            to.setVisible(false);

            tofield.setVisible(false);

            currentregisteredemaillabel.setVisible(false);
            currentregisteredemailfield.setVisible(false);
            gobacklastupdateslide.setVisible(false);

            updatefirstname.setVisible(true);
            updatelastname.setVisible(true);
            updatedateofbirth.setVisible(true);
            updateemail.setVisible(true);
            updatestreetaddress.setVisible(true);
            updatecustomergohome.setVisible(true);
            updatesubmit.setVisible(false);

            updatesuccessstatus.setVisible(false);

        }

        if (e.getSource() == updatesubmit) {

            String to = tofield.getText();
            String curremail = currentregisteredemailfield.getText();
            String set = switchvariable;

            int rowsaffected = SQLclass.updatestatement(curremail, set, to);

            updatesuccessstatus.setVisible(true);
            updatesuccessstatus.setText(rowsaffected + " Rows Updated");

            tofield.setText("");
            currentregisteredemailfield.setText("");

        }

        if (e.getSource() == gobackfromdeletemenu) {
           
            createcustomer.setVisible(true);
            viewcustomers.setVisible(true);
            removecustomers.setVisible(true);
            exitapplication.setVisible(true);
            updatecustomer.setVisible(true);

            deletebutton.setVisible(false);
            deletefield.setVisible(false);
            deletetext.setVisible(false);
            deletesuccessstatus.setVisible(false);
            gobackfromdeletemenu.setVisible(false);

        } else if (e.getSource() == deletebutton) {
         
            String removingcustomeremail = deletefield.getText();
            int removedrows = SQLclass.removecustomer(removingcustomeremail);

            deletesuccessstatus.setVisible(true);
            deletesuccessstatus.setText(removedrows + " Rows Removed");

            deletefield.setText("");
        }




    }

}